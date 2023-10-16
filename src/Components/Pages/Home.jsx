import React from 'react'
import { Link } from "react-scroll"

const Home = () => {
  return (
      <div id='home'>
  <div className='  w-full  bg-[#EFECE7] h-screen flex container xl:max-w-[1400px] mx-auto space-x-10 items-center ' >
    
    <div className=' w-full flex flex-col items xl:w-1/2  items-center'>
      <br /><br />
    <span className='text-[23px] text-[#24324b] '>Hey There 👋 I am</span>
<p className='text-[70px] sm:text-[130px] text-[#5a4c2d]   font-medium drop-shadow-xl'>Mizzy Ayo</p>
<span className='text-2xl text-[#9B9CB1]  font-medium'>Professional</span> <span className='text-2xl text-[#24324b] font-medium'> Web Developer</span>
<p className='text-[18px] text-[#9B9CB1]  font-medium leading-7'>With  2 years experience </p><br /><br />


<div className='flex gap-x-8'>
<button className='bg-[#9B9CB1] px-6 sm:px-10 h-12 rounded-[26px]  text-[18px] font-semibold hover:shadow-2xl '><Link to="contact"  spy={true} smooth={true} offset={50} duration={1900}>Contact Me</Link></button>
<button className='bg-[#24324b] px-6 sm:px-10  h-12 rounded-[26px] text-[#EFECE7] text-[18px] font-semibold animate-bounce  hover:shadow-2xl '  > <Link to="learn"  spy={true} smooth={true} offset={50} duration={1900} >Learn more</Link></button>
</div>



    </div>



    <div className=' hidden xl:block w-1/2 h-[680px] bg-[#5a4c2d] rounded-[26px] mt-[40px] '>

      
       
       <img src="images/g.jpeg" className='rounded-[25px] animate-pulse' />


    </div>


  </div>
     </div>
  )
}

export default Home
