import React from 'react';
import search from '../assets/icons/search.svg'; // Ensure this path is correct
import Logo from '../assets/footerImage/Logo.png'; // Corrected path and extension

const Navbar = ({ input, setInput, submitCity }) => {
  return (
    <nav className='w-full p-3 flex justify-between items-center h-[8.5rem] bg-[#7f77f0]'>
      <img className='ml-8 h-[5.5rem] w-[6.5rem]' src={Logo} alt="Logo" /> {/* Adjust height as needed */}
      <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2 mr-10'>
        <img src={search} alt="search" className='ml-8 w-[1.5rem] h-[1.5rem] ' />
        <input
          type="text"
          placeholder='Search city'
          className='focus:outline-none w-full text-[#212121] text-lg'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              submitCity(); // Submit on Enter key press
            }
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;

