import React from 'react';
import Links from './Links';
import { useCallback, useEffect, useState } from 'react';
import {useDebounce} from 'use-debounce';
import { useResultContext } from '../context/ResultContextProvider';
import alanBtn from "@alan-ai/alan-sdk-web";

const Search = ({darkTheme, setDarkTheme}) => {

  const [text, setText] = useState('Elon Musk');
  const {setSearchTerm} = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);
  const {alanInstance, setAlanInstance} =  useResultContext();

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  },[debouncedValue])

  const update = useCallback(({detail:textresult})=>{
    setSearchTerm(textresult);
    setText(textresult);
  }, [alanInstance]);


  const update1 = useCallback(()=>{
    setDarkTheme(true)
    alanInstance.playText("Switching to the dark mode");
  }, [alanInstance]);


  const update2 = useCallback(()=>{
    setDarkTheme(false)
    alanInstance.playText("Switching to the light mode");
  }, [alanInstance]);

  useEffect(()=>{
    window.addEventListener("searchResult", update);
    window.addEventListener("dark_mode", update1);
    window.addEventListener("light_mode", update2);
      return(()=>{
        window.removeEventListener("searchResult", update)
        window.removeEventListener("dark_mode", update1)
        window.removeEventListener("light_mode", update2)
      });
    }, [update]);

  useEffect( () => {
    if(alanInstance !=null) return

    setAlanInstance(
    alanBtn({
        bottom: "2vh",
        right: "1vw",
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command, textresult }) => {
            window.dispatchEvent(new CustomEvent(command, {detail:textresult}));
          },
        })
      );
    }, []);

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input
        value={text}
        type='text'
        className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
        placeholder='Search Goggl or type URL'
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button type='button' className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={() => setText('')}>
            x
        </button>
      )}
        <Links/>
    </div>
  )
}

export default Search
