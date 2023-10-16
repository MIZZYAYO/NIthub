import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from "react-scroll"
import "./Navbar.css";
import Hamburger from './Hamburger';

const Navbar = () => {
  return (
  
  // <div className='w-[100%] border-2 h-[100px]'>

  // </div>

  <header>
  <navbar>
    <div class="flex lg:flex-row justify-evenly items-center flex-col bg-[#e6e2dc]   py-3 rounded-[25px] opacity-95 fixed left-0 right-0 top-0 z-10">
      <div class="flex space-x-7  items-center">
        <img src="images/d.png" className='w-12 cursor-pointer mt-2' />
        <h1 class="text-[#86641C] font-semibold text-[45px] tracking-wide cursor-pointer underline-offset-8 decoration-[#86641C] underline decoration-2 mb-3 drop-shadow-xl"><Link to="home" spy={true} smooth={true} offset={50} duration={1500}>MizzyWork</Link></h1>
      </div>
      <ul class="hidden xl:flex space-x-10  ml-60  mt-2">
        <li class="text-[#86641C]  hover:text-[#d8ba78] text-[22px] font-semibold tracking-normal cursor-pointer duration-75 delay-75"><Link to="home" spy={true} smooth={true} offset={50} duration={1500}>Home</Link></li>
        <li class="text-[#86641C]  hover:text-[#d8ba78] text-[22px] font-semibold tracking-normal cursor-pointer duration-75 delay-75" ><Link to="about" spy={true} smooth={true} offset={50} duration={1500}>About</Link></li>

        <li class="text-[#86641C]  hover:text-[#d8ba78] text-[22px] font-semibold tracking-normal cursor-pointer duration-75 delay-75"><Link to="portfolio" spy={true} smooth={true} offset={50} duration={1500}>Portfolio</Link></li>

        <li class="text-[#86641C]  hover:text-[#d8ba78] text-[22px] font-semibold tracking-normal cursor-pointer duration-75 delay-75"><Link to="contact" spy={true} smooth={true} offset={50} duration={1500} >Contact</Link></li>
       
      </ul>
      
      {/* Hamburger menu */}
      
     

      <Hamburger/>

        

         {/* End of hamburger menu */}

    </div>



    
  </navbar>
 
</header>
    
  )
}

export default Navbar
