import React from 'react'
import Loader from 'react-loader-spinner';
import {TailSpin} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <TailSpin type="Puff" color="#00BFFF" height={500} width={80}/>
    </div>
  )
}

export default Loading
