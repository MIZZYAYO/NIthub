import { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll"

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };
  return (

    

    <div className="flex flex-col   ">
      <button className="xl:hidden delay-180 h-12" onClick={toggleMenu}><svg className="h-9 text-[#86641C]  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {isOpen ? ( <path strokeLinecap="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/> ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>) } </svg></button>{isOpen && (
            <div className='bg-[#e6e2dc]  text-center rounded-lg' >
     <ul class=" flex-col space-x-10  space-y-4 xl:hidden " >
        <li class="text-[#86641C]  hover:text-[#d8ba78] text-[22px] font-semibold tracking-normal cursor-pointer duration-75 delay-75 ml-10 " ><Link to="home" spy={true} smooth={true} offset={50} duration={1500}>Home</Link></li>

        <li class="text-[#86641C]  hover:text-[#d8ba78] text-[22px] font-semibold tracking-normal cursor-pointer duration-75 delay-75" ><Link to="about" spy={true} smooth={true} offset={50} duration={1500}>About</Link></li>

        <li class="text-[#86641C]  hover:text-[#d8ba78] text-[22px] font-semibold tracking-normal cursor-pointer duration-75 delay-75"><Link to="portfolio" spy={true} smooth={true} offset={50} duration={1500}>Portfolio</Link></li>

        <li class="text-[#86641C]  hover:text-[#d8ba78] text-[22px] font-semibold tracking-normal cursor-pointer duration-75 delay-75"><Link to="contact" spy={true} smooth={true} offset={50} duration={1500} >Contact</Link></li>
       
      </ul>
         </div>
          )}
        </div>
  
  );
}

export default Hamburger;