import React, { useState } from 'react'
import './image.scss'

export const ImageSlider = (props) => {
   const { slides } = props
   const [currentIndex, setCurrentIndex] = useState(0)

   const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
   }

   const goToNext = () => {
      const isLastSlide = currentIndex === 0
      const newIndex = isLastSlide ? slides.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
   }

   const goToSlide = slideIndex => {
      setCurrentIndex(slideIndex)
   }

   return (
      <div className='sliderStyles'>
         <button className='leftArrowStyles' onClick={goToPrevious}>❰</button>
         <button className='rightArrowStyles' onClick={goToNext}>❱</button>
         <div className='slideStyles' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
         <div className='dotoContainerStyles' onClick={() => { }}>
            {slides.map((slide, slideIndex) => (
               <div className='dotStyle' onClick={() => goToSlide(slideIndex)} key={slideIndex}>●</div>
            ))}
         </div>
      </div>
   )
}

export default ImageSlider
