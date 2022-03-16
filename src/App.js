import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './components/Routes';
import { useState } from 'react';
// import useAlan from './hooks/useAlan';

function App() {
  
  const [darkTheme, setDarkTheme] = useState(false);
  
  // useAlan();

  return (
    <>
      <div className={darkTheme ? 'dark' : ''}>
        <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Routes/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
