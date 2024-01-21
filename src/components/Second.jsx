import React  ,{useEffect}from 'react'
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
import AOS from 'aos';
import 'aos/dist/aos.css'


function Second() {

  useEffect(() => {
    AOS.init({
       
      easing: 'ease-in-out'
    });
  }, []);



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
  }
  ]
  const topics2=[
     {
      "image" : technical,
      "title" : "Technical"
    }, {
      "image" : ferrari ,
      "title" : "Driver Market"
  
    }, {
      "image" : blue,
      "title" : "2022 Cars"}
  ]
  

  return (
    <>    <div className=' overflow-hidden bg-white mt-32  flex flex-col md:flex-row justify-center  items-center '>
    <div className='text-center w-full flex flex-col justify-center items-center font-bold'>
      <h1 className='text-red-600 text-xl md:text-2xl  '>Featured</h1>
      <h1 className='text-Black text-4xl md:text-6xl  '>Topics</h1>
      </div> 
     
    </div>
   <div className='flex flex-col   gap-5 lg:flex-row w-full p-10'>
    
    
      {
        topics.map((item)=>{
          return(<div data-aos='fade-up' data-aos-duration='1500' className='w-full lg:w-1/3 text-center'>
          <img src={item.image} className='hover:opacity-90 cursor-pointer w-full h-[300px] md:h-[450px] rounded-md' alt='' />
           <h1 className='text-black text-3xl font-semibold  mt-4 md:mt-8'>{item.title}</h1>
             </div>)
        })
      }
   
    
   </div>
   <div className='flex flex-col   gap-5 lg:flex-row w-full p-10'>
   
   {
        topics2.map((item)=>{
          return(<div data-aos='fade-up' data-aos-duration='1500' className='w-full  lg:w-1/3 text-center'>
          <img src={item.image} className='hover:opacity-90 cursor-pointer w-full h-[300px] md:h-[450px] rounded-md' alt='' />
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

      <div className='flex flex-col md:flex-row justify-center mt-16 items-center gap-2 md:gap-10 w-full p-2 md:p-10'>
        
        <div data-aos='zoom-in' data-aos-duration='1500' className='w-full relative md:w-1/3 lg:w-1/4  flex flex-col gap-5 items-center'>
        <button className='bg-white rounded-full w-[60px] hover:bg-red-600 text-red-600 hover:text-white absolute top-0 left-0 md:left-16   p-3 z-10'>
        <i class="fa-solid text-xl fa-2"></i>
            </button>
          <img src={man1} className='hover:scale-110 duration-1000 cursor-pointer md:w-[220px] w-[300px] h-[300px] md:h-[220px] bg-red-600 rounded-full pt-5' alt='' />
          <div className='flex flex-col justify-center items-center'>
          <img src={egypt} className='w-[40px]  h-[40px]' alt='' />
          <h1 className='text-white md:text-black text-2xl  font-semibold'>Max</h1>
        <h1 className='text-white md:text-black text-4xl  font-semibold '>Hamilton</h1>
          </div>
        </div>



        <div data-aos='zoom-in' data-aos-duration='1500' className='w-full md:w-1/3 lg:w-1/4  relative flex flex-col gap-5 items-center'>
        <button className='bg-white rounded-full w-[60px] hover:bg-red-600 text-red-600 hover:text-white absolute top-0 left-0 md:left-16   p-3 z-10'>
        <i class="fa-solid text-xl  fa-1"></i>
            </button>
          <img src={man2} className='hover:scale-110 duration-1000 cursor-pointer lg:w-[300px] w-[250px] h-[250px] lg:h-[300px] bg-red-600 rounded-full pt-5' alt='' />
          <div className='flex flex-col justify-center items-center'>
          <img src={turkey} className='w-[40px]  h-[40px]' alt='' />
          <h1 className='text-white md:text-black text-2xl  font-semibold'>Lewis </h1>
        <h1 className='text-white md:text-black text-4xl  font-semibold '>Verstappen</h1>
          </div>
        </div>
       
       
        <div data-aos='zoom-in' data-aos-duration='1500' className='w-full md:w-1/3 lg:w-1/4  relative  flex flex-col gap-5 items-center'>
        <button className='bg-white rounded-full w-[60px] hover:bg-red-600 text-red-600 hover:text-white absolute top-0 left-0 md:left-16   p-3 z-10'>
        <i class="fa-solid text-xl fa-3"></i>
            </button>
          <img src={man3} className='hover:scale-110 duration-1000 cursor-pointer md:w-[220px] w-[300px] h-[300px] md:h-[220px] bg-red-600 rounded-full pt-5' alt='' />
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