import React from 'react'


const About = () => {
  return (
    <div id='about'>
    <div className=' w-full  h-screen bg-[#EFECE7]  justify-center flex-col xl:flex-row flex container xl:max-w-[1400px] mx-auto lg:space-x-14 items-center' >
      <div className='w-full ml-10 lg:ml-0'>
        <br></br><br></br><br></br>
        <span className='text-3xl text-[#696ec9]  font-medium'>ABOUT ME</span>
        <br></br>
      <p className='text-7xl text-[#24324b] font-medium drop-shadow-xl'>Better design,<br></br>better experience</p>
      <br />
<span className='text-[18px] text-[#9B9CB1]  font-medium leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula,<br></br> malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.</span></div>

      <hr  className=' hidden xl:flex w-[2px] bg-[#86641C] h-[400px] rounded '/>
      <div className=' w-full ml-10 lg:ml-0'>
        <br /><br /><br />

        <span className='text-4xl text-[#24324b] font-medium drop-shadow-xl'>Connect With Me</span>
      <br /><br />
<p className='text-[18px] text-[#9B9CB1]  font-medium leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper tempor.</p>
<br /><br />
<div className=' w-full sm:w-1/2 flex space-x-7 justify-evenly   '>
  <a href='https://www.instagram.com/just_mizzy_/'><img src="images/instagram.png" className='w-12' /></a>
  
  <a href="https://www.pinterest.com/danielmgbeahurike/"><img src="images/pinterest.png" className='w-12' /></a>
  
  <a href="https://twitter.com/mizzy_ayo_"><img src="images/twitter.png" className='w-12' /></a>

  <a href="https://www.youtube.com/channel/UClAeOAbm-DSW8ZZsG7aQb0g"><img src="images/youtube.png" className='w-12' /></a>

  <a href="https://www.linkedin.com/in/daniel-mgbeahurike-93978b282/"><img src="images/linkedin.png" className='w-12 ' /></a>
  
  </div>


</div>
    </div>
    </div>
  )
}

export default About
