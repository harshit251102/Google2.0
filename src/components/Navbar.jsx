import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='grid grid-cols-6 gap-2 space-x-5 w-screen'>
        <Link to="/">
            <pre className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900'>   Goggl 🔎</pre>
        </Link>
        <button type='button' onClick={() => setDarkTheme(!darkTheme)} className="text-xl col-end-6 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
            {darkTheme ? 'Light 💡' : 'Dark 🌙'}
        </button>
        <Link to="/maps">
          <pre className='text-2xl bg-blue-500 col-end-7 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900'>   Maps 🗺️</pre>
        </Link>
      </div>
      <Search setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
    </div>
  )
}

export default Navbar