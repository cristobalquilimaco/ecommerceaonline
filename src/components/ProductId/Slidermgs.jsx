import React, { useState } from 'react';
import '../ProductId/styles/slidermgs.css';

const Slidermgs = ({ product }) => {
  const [numberImg, setNumberImg] = useState(0)

const objStyle = {
  transform: `translateX(calc(-${numberImg} / 3 * 100%))`
}

const handlePrev = ()=>{
  if(numberImg - 1 < 0){

  } else{
  setNumberImg(numberImg - 1)
}
}

const handleNext = ()=>{
  if(numberImg + 1 > 2){

  } else{
  setNumberImg(numberImg + 1)
}
  
}

  return (
    <div className='slider'>
      <button onClick={handlePrev} className='arrow__head arrow__left'>&lt;</button>
      <div style={objStyle} className='slider__second'>
        {product?.images.map((imgInfo) => (
          <div className='slider__img_container' key={imgInfo.id}>
            <img className='slider__img' src={imgInfo.url} alt='' />
          </div>
        ))}
        
      </div>
      <button onClick={handleNext}  className='arrow__head arrow__rigth'>&gt;</button>
    </div>
  );
};

export default Slidermgs;