
import { useState } from 'react'
import './App.css'

function App() {
  let BlurryWood = '#DEB887';
 const [bgColor,setBgColor] =useState(BlurryWood)
  const bgChange=(e)=>{
    const {value} = e.target;
    console.log(`${value}`);
    if(value ==='red'){
      let Red ='#FF0000'
      setBgColor(Red)
      console.log(bgColor);
    }else if(value==='green'){
      let Greeen ='#008000'
      setBgColor(Greeen)
    }else if(value==='black'){
      let Dark ='#000000'
      setBgColor(Dark)
    }else{
      let Blue='#0000FF'
      setBgColor(Blue)
    }
  }
  return (
    <>
      <div style={{height:'500px', backgroundColor: bgColor}} className='container d-flex justify-content-center align-items-center text-light w-75 rounded flex-column mt-5'>
          <h2 className='fs-1 fw-bold'>BackGround Color Change</h2>
          <div className='mt-3'>
            <button value='red' onClick={e=>bgChange(e)} className='btn rounded-pill btn-light me-2'>Red</button>
            <button value='green' onClick={e=>bgChange(e)}  className='btn rounded-pill btn-light me-2'>Green</button>
            <button value='black' onClick={e=>bgChange(e)} className='btn rounded-pill btn-light me-2'>Black</button>
            <button value='blue' onClick={e=>bgChange(e)} className='btn rounded-pill btn-light'>Blue</button>
          </div>
      </div>
    </>
  )
}

export default App
