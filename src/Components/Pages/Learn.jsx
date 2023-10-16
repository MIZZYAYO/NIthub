import React from 'react'

const Learn = () => {
  return (
    <div id='learn'>
        
        <div className=' border-2 border-[#d8ba78] w-full  md:h-[500px] rounded-lg flex flex-col md:space-y-2 items-center bg-[#9b7d3d] h-[1000px] space-y-10 md:ml-0 ml-2' >

          <div className=' w-full  flex-1 flex md:flex-row flex-col justify-evenly '>
            <div className=' h-60 md:w-80 mt-10 text-center w-full '>
              
              <span className='text-6xl font-semibold text-[#e6e2dc]'>Let's Talk!</span>
              <br /><br />
              <p className='text-2xl font-bold text-[#24324B] '>Contact Info</p>
              
            
            <span className='text-1xl font-semibold text-[#24324B] leading-7'><a href="https://mail.google.com/mail/u/0/#inbox">danielmgbeahurike@gmail.com</a><br></br>12 Aiyetola Street, Akoka, Bariga<br></br>🌐Whatsapp:📲+234 807 404 2007
              </span>


</div>
          <div className=' h-40 md:w-40 text-center mt-14 w-full'>
            <span className='text-2xl font-semibold text-[#e6e2dc]'>What I Do?</span>
            <br /><br />
            <p className='text-1xl font-bold text-[#24324B] leading-9'>Web Development<br></br>Web Design<br></br>UI/UX Design<br></br>Graphics Design</p>
          </div>
            <div className=' h-40 md:w-40 text-center mt-14 w-full'>
            <span className='text-2xl font-semibold text-[#e6e2dc]'>Skills</span>
            <br /><br />
            <p className='text-1xl font-bold text-[#24324B] leading-9'>Figma💠<br></br>HTML🔰<br></br>CSS🎨<br></br>React🔅</p>
            </div>
            
          </div>

          <hr  className='w-4/5 h-[2px] bg-[#c0a770] hidden md:flex'/>

          <div className=' w-full flex-1 flex flex-col text-center space-y-2 '>
          <div className=' md:w-[50%] w-4/5 flex  justify-between space-x-7   self-center mt-10'>
  <a href='https://www.instagram.com/just_mizzy_/'><img src="images/instagram.png" className='w-12' /></a>
  
  <a href="https://www.pinterest.com/danielmgbeahurike/"><img src="images/pinterest.png" className='w-12' /></a>
  
  <a href="https://twitter.com/mizzy_ayo_"><img src="images/twitter.png" className='w-12' /></a>

  <a href="https://www.youtube.com/channel/UClAeOAbm-DSW8ZZsG7aQb0g"><img src="images/youtube.png" className='w-12' /></a>

  <a href="https://www.linkedin.com/in/daniel-mgbeahurike-93978b282/"><img src="images/linkedin.png" className='w-12 ' /></a>
  
  </div>
  
  <br />

  <span className='text-1xl font-bold text-[#24324B] '>All rights reserved by © Portfolio creative 2024</span>
          </div>
    




        </div>
        
    </div>
  )
}

export default Learn
