import React, {useState} from 'react'
import "./ProgressBar.css"
const ProgressBar = () => {
    const [progress , setProgress] = useState(50);

    const IncreaseProgress = () => {
        if(progress < 100){
            setProgress(progress + 10);
        }
    }

    const DecreaseProgress = () => {
        if(progress > 0){
            setProgress(progress - 10);
        }
    }
  return (
    <div className='progressBar'>
        <h1>Progress Bar : {progress}</h1> 
        <div
        style={{
          width: '100%',
          backgroundColor: '#e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          height: '20px',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: 'Red',
            transition: 'width 0.4s ease-in-out',
          }}
        ></div>
        </div>
        <button onClick={IncreaseProgress}>Increase</button>&nbsp;
        <button onClick={DecreaseProgress}>Decrease</button> 
    </div>
  )
}

export default ProgressBar