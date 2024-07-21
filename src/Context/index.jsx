import { useContext, createContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('kanpur');
    const [thisLocation, setLocation] = useState('');

    // fetch api
    const fetchWeather = () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${place}&contentType=json&unitGroup=metric&shortColumnNames=0`;

        fetch(url, {
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const thisData = Object.values(data.locations)[0];
                setLocation(thisData.address);
                setValues(thisData.values);
                setWeather(thisData.values[0]);
            })
            .catch(e => {
                console.error(e);
                // if the api throws error.
                alert('This place does not exist');
            });
    };

    useEffect(() => {
        fetchWeather();
    }, [place]);

    useEffect(() => {
    }, [values]);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
