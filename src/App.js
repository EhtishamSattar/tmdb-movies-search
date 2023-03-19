import './App.css';
import React, { useState } from 'react';
import Data from './Components/Data';
import Sidebar from './Components/Sidebar';
import bg from './Components/images/bg.jpg'

function App() {
  const [isHidden, setIsHidden] = useState(true);

  const sidebarVisibility = () => {
    console.log("button clikced")
    setIsHidden(!isHidden);
  }
  return (
    <>
      <button
        onClick={sidebarVisibility}
        className="z-30 p-2 m-2 border-2 bg-white rounded-md  shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white fixed top-0 left-0 "
      >
        <svg
          className="w-5 h-5 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {/* BACKGROUND IMAGE */}

      {/* <div className=''>
        <img className='h-screen w-screen' src={bg} alt="background-image"></img>
      </div> */}

      <div className='flex bg-slate-600'>
        <div className={`${isHidden ? '' : 'basis-1/5'} bg-black`} style={{ display: isHidden ? 'none' : 'block' }}>
          <Sidebar />
        </div>
        <div id="data" className={`${isHidden ? '' : 'basis-4/5 '} relative bottom-40  bg-slate-500`}>
          <div className='flex flex-col'>
            <div className=''>
              <img className='h-screen w-screen' src={bg} alt="background-image"></img>
            </div>
            <div className='my-6 px-6 pt-10 relative bottom-48 z-10'>
              <div
                className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500"
              >
                <input
                  type="text"
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                  placeholder="Search"
                />
                <button
                  className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block bg-gray-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

            </div>
            <div className={`lg:pl-2 lg:pr-2 xl:pl-2 bg-slate-500 pr-1 relative bottom-20`}>
              <Data />

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
