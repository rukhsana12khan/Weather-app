import { useState } from 'react';
import './App.css';
import MiniCard from './Components/MiniCard'; 
import WeatherCard from './Components/WeatherCard'; 
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx';
import { useStateContext } from './Context'; 

function App() {

  const [input, setInput] = useState('');


  const { weather, thisLocation, values, setPlace } = useStateContext();


  const submitCity = () => {
    setPlace(input);
    setInput(''); // Clear input after submission
  };

  return (
    <div className='w-full h-screen text-white'>
      <div>
      <Navbar input={input} setInput={setInput} submitCity={submitCity} />
    </div>
      <main className=''>
        <div className='w-full flex flex-wrap gap-8 px-[10%] items-center justify-center pb-[10%] '>
         
          {/* Weather card */}
          <WeatherCard
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />

          {/* Mini weather cards */}
          <div className='flex justify-center gap-8 flex-wrap w-[60%] mt-[10%]'>
            {values?.slice(1, 7).map(curr => (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
