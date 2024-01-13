import React from 'react'
import hamilton from '../images/hamilton.jpg'
import building from '../images/building.jpg'
import shokman from '../images/shokman.png'
import technical from '../images/technical.png'
import ferrari from '../images/ferrari side.png'
import blue from '../images/blue ferrari..png'
import bg from '../images/bg.png'
import man1 from '../images/man1.png'
import man2 from '../images/man2.png'
import man3 from '../images/man3.png'
import egypt from '../images/egypt.png'
import turkey from '../images/turkey.png'
import netherland from '../images/netherlands.png'
function Second() {
  const topics = [
  {
    "image" : hamilton,
    "title" : "Hamilton VS Verstapen"
  },
    {
    "image" : building,
    "title" : "Race Calender"
  }, {
    "image" : shokman,
    "title" : "Podcasts"
  }, {
    "image" : technical,
    "title" : "Technical"
  }, {
    "image" : ferrari ,
    "title" : "Driver Market"

  }, {
    "image" : blue,
    "title" : "2022 Cars"
  }]
  

  return (
    <>    <div className='bg-white mt-32 flex flex-col md:flex-row justify-center  items-center '>
    <div className='text-center  flex flex-col ml-0 md:ml-auto justify-center items-center font-bold'>
      <h1 className='text-red-600 text-xl md:text-2xl  '>Featured</h1>
      <h1 className='text-Black text-4xl md:text-6xl  '>Topics</h1>
      </div> 
      <div className='ml-0 md:ml-auto pr-0 md:pr-8'><button className='bg-red-600 hover:bg-red-400 text-white hover:text-gray-600 mt-10 md:mt-4 -skew-x-12   font-bold px-10 p-4'>Veiw All <i class="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
   <div className='flex mt-32 flex-col flex-wrap gap-y-16 md:gap-y-20 gap-5 md:gap-10 md:flex-row w-full p-10'>
    
    
      {
        topics.map((item)=>{
          return(<div className='w-full md:w-[450px] text-center'>
          <img src={item.image} className='w-full h-[250px] md:h-[450px] rounded-md' alt='' />
           <h1 className='text-black text-3xl font-semibold  mt-4 md:mt-8'>{item.title}</h1>
             </div>)
        })
      }
    
   </div>
   
   <div className='mt-32 h-full md:h-[500px]' style={{background:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

      <div className='flex flex-col items-center justify-center text-center pt-28'>
        <h1 className='text-red-600 text-3xl  font-semibold'>Drivers</h1>
        <h1 className='text-white text-5xl  font-semibold mt-6'>2023 Standings</h1>
      </div>

      <div className='flex flex-col md:flex-row justify-center mt-16 items-center gap-10 w-full p-10'>
        
        <div className='w-full relative md:w-1/4 flex flex-col gap-5 items-center'>
        <button className='bg-white rounded-full w-[60px] hover:bg-red-600 text-red-600 hover:text-white absolute top-0 left-0 md:left-16   p-3 z-10'>
        <i class="fa-solid text-xl fa-2"></i>
            </button>
          <img src={man1} className='md:w-[220px] w-[300px] h-[300px] md:h-[220px] bg-red-600 rounded-full pt-5' alt='' />
          <div className='flex flex-col justify-center items-center'>
          <img src={egypt} className='w-[40px]  h-[40px]' alt='' />
          <h1 className='text-white md:text-black text-2xl  font-semibold'>Max</h1>
        <h1 className='text-white md:text-black text-4xl  font-semibold '>Hamilton</h1>
          </div>
        </div>



        <div className='w-full md:w-1/4 relative flex flex-col gap-5 items-center'>
        <button className='bg-white rounded-full w-[60px] hover:bg-red-600 text-red-600 hover:text-white absolute top-0 left-0 md:left-16   p-3 z-10'>
        <i class="fa-solid text-xl  fa-1"></i>
            </button>
          <img src={man2} className='md:w-[300px] w-[300px] h-[300px] md:h-[300px] bg-red-600 rounded-full pt-5' alt='' />
          <div className='flex flex-col justify-center items-center'>
          <img src={turkey} className='w-[40px]  h-[40px]' alt='' />
          <h1 className='text-white md:text-black text-2xl  font-semibold'>Lewis </h1>
        <h1 className='text-white md:text-black text-4xl  font-semibold '>Verstappen</h1>
          </div>
        </div>
       
       
        <div className='w-full md:w-1/4 relative  flex flex-col gap-5 items-center'>
        <button className='bg-white rounded-full w-[60px] hover:bg-red-600 text-red-600 hover:text-white absolute top-0 left-0 md:left-16   p-3 z-10'>
        <i class="fa-solid text-xl fa-3"></i>
            </button>
          <img src={man3} className='md:w-[220px] w-[300px] h-[300px] md:h-[220px] bg-red-600 rounded-full pt-5' alt='' />
          <div className='flex flex-col justify-center items-center'>
          <img src={netherland} className='w-[40px]  h-[40px]' alt='' />
          <h1 className='text-white md:text-black text-2xl  font-semibold'>Valetti</h1>
        <h1 className='text-white md:text-black text-4xl  font-semibold '>Bottas</h1>
          </div>
        </div>
        

      </div>
      <div className='flex items-center justify-center  mt-20'>
      <button className='bg-red-600 hover:bg-red-400 mb-20 text-white hover:text-gray-600 mt-10 md:mt-4 -skew-x-12   font-bold px-10 p-4'>Veiw Full Standings <i class="fa-solid fa-angle-right"></i></button>
      </div>
   </div>
    </>

  )
}

export default Second