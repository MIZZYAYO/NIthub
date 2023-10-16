import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
     <div className=' w-full  h-[1100px] bg-[#EFECE7]  justify-center flex-col  space-y-10 flex container xl:max-w-[1400px] mx-auto lg:space-x-14 items-center ' >


<div className='w-full  text-center  '>
<span className='text-[20px] text-[#696ec9]  font-medium'>Contact With Me</span>
<br />
<p className='text-6xl text-[#24324b] font-medium drop-shadow-xl'>Have a Project in Mind?</p>
<br />
<span className='text-[19px] text-[#9B9CB1]  font-medium leading-6'>Let's discuss a project idea you have and<br></br> see how we can work together to make it possible</span>
</div>

<div className='w-full  items-center flex flex-col space-y-5'>

<div className='flex-col sm:items-start items-center w-full flex sm:flex-row justify-evenly flex-wrap space-y-5'>
  
  <input type="text" placeholder='Enter Your Name'  className=' w-[80%] sm:w-2/6 h-16 bg-[#e6e2dc] rounded-md font-medium text-[18px] text-[#86641C] placeholder:text-[#8d8c8a] px-5 mt-5' />

  <input type="text" placeholder='Company (Optional)' className=' w-[80%] sm:w-5/12 h-16 bg-[#e6e2dc] rounded-md font-medium text-[18px] text-[#86641C] placeholder:text-[#8d8c8a] px-5 ' />

  <input type="Email" placeholder='Enter Your Email' className=' w-[80%] sm:w-5/12 h-16 bg-[#e6e2dc] rounded-md font-medium text-[18px] text-[#86641C] placeholder:text-[#8d8c8a] px-5 ' />

  <input type="number" placeholder='Phone Number' className='w-[80%] sm:w-2/6 h-16 bg-[#e6e2dc] rounded-md font-medium text-[18px] text-[#86641C] placeholder:text-[#8d8c8a] px-5 ' />

  
</div>

<div className='w-full   text-center'>

<textarea type="text"  placeholder='Tell me about your Project' className='w-[90%] sm:w-1/2 h-60 bg-[#e6e2dc] rounded-md px-5 sm:items-start items-center font-medium text-[18px] text-[#86641C] placeholder:text-[#8d8c8a] py-4  ' />

</div>

<div className='w-2/6 lg:w-[13%]   '><button className=' w-full bg-[#24324b] h-14 rounded-3xl text-white font-medium hover:drop-shadow-xl animate-bounce  '>Contact Me</button></div>

</div>
      
      
      
      
      </div>
    </div>
  )
}

export default Contact
