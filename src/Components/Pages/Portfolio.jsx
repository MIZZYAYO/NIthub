import React from 'react'

const Portfolio = () => {
  return (
    <div id='portfolio'>

     <div className=' w-full  h-[1250px] bg-[#EFECE7]  justify-center flex-col   flex container xl:max-w-[1400px] mx-auto lg:space-x-14 items-center ' >


   <div className='w-full  text-center '>
   <span className='text-3xl text-[#696ec9]  font-medium'>Creative Portfolios</span>
   <br />
   <p className='text-7xl text-[#24324b] font-medium drop-shadow-xl'>Recent Works</p>
   <br />
   <span className='text-[19px] text-[#9B9CB1]  font-medium leading-6'>This are some of the  projects i have worked on since i started web<br></br> development (Front-end development) 2 years ago.</span>
   </div>
   
  
   <div className='w-full  mt-10 flex justify-evenly flex-wrap space-y-4 '>
    <img src="images/shades.jpeg"  className='w-5/12 rounded-lg drop-shadow-xl cursor-zoom-in '  />
    <img src="images/site.jpeg" className='w-5/12 rounded-lg drop-shadow-xl cursor-zoom-in' />
    <img src="images/calculator.jpeg" className='w-5/12 rounded-lg drop-shadow-xl  cursor-zoom-in' />
   </div>
   




      </div>

    </div>
  )
}

export default Portfolio