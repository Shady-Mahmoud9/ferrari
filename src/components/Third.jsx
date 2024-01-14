import React ,{useEffect} from 'react'
import bg from '../images/bg.png'
import ferrari from '../images/firrari.png'
import oracle from '../images/oracle.png'
import marcides from '../images/marcidec.png'
import scudera from '../images/scudira.png'
import amg from '../images/amg.png'
import oraclecar from '../images/oraclecar.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Third() {

  useEffect(() => {
    AOS.init({
       
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className='h-full md:h-[800px] mt-[70px] md:mt-[530px] ' style={{background:`url(${bg})` ,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

      <div className='flex flex-col items-center justify-center text-center pt-28'>
        <h1 className='text-red-600 text-3xl  font-semibold'>Constrauctors</h1>
        <h1 className='text-white text-5xl  font-semibold mt-6'>2023 Standings</h1>
      </div>

      <div className='flex flex-col md:flex-row justify-center  my-16 items-center gap-10 w-full p-10'>
        
        <div data-aos='zoom-in' data-aos-duration='1500' className='w-full  relative md:w-1/4 flex flex-col gap-2 items-center'>
        <button className='bg-red-600 text-white hover:text-red-600 rounded-full w-[60px] hover:bg-gray-200  absolute top-0 left-0 md:left-16   p-3 z-10'>
        <i class="fa-solid text-xl  fa-2"></i>
            </button>
          <img src={oracle} className='md:w-[220px] w-[300px] hover:bg-gray-300 cursor-pointer h-[300px] md:h-[220px] bg-white rounded-full pt-5' alt='' />
          <img src={oraclecar} className='-mt-32 w-[270px]' alt='' />

          <div className='flex mt-10 flex-col justify-center items-center text-center'>
          <h1 className='text-white  text-4xl  font-semibold '>RedBul Racing</h1>
          <h1 className='text-white  text-2xl  font-semibold'>585.5PTS</h1>
        
          </div>
        </div>



        <div data-aos='zoom-in' data-aos-duration='1500' className='w-full md:w-1/4 relative flex flex-col gap-2 items-center'>
        <button className='bg-red-600 text-white hover:text-red-600 rounded-full w-[60px] hover:bg-gray-300  absolute top-0 left-0 md:left-16   p-3 z-10'>
        <i class="fa-solid text-xl   fa-1"></i>
            </button>
          <img src={marcides} className='md:w-[300px] w-[300px] cursor-pointer hover:bg-gray-200 h-[300px] md:h-[300px] bg-white rounded-full pt-5' alt='' />
          <img src={amg} className='-mt-28 w-[270px]' alt='' />
          
          <div className='flex  flex-col justify-center items-center text-center'>
          
          <h1 className='text-white  text-4xl  font-semibold '>Mercedes <br/> AMG Petronas</h1>
          <h1 className='text-white  text-2xl  font-semibold'>650.13PTS</h1>
          </div>
        </div>
       
       
        <div data-aos='zoom-in' data-aos-duration='1500' className='w-full md:w-1/4 relative  flex flex-col gap-2 items-center'>
        <button className='bg-red-600 text-white hover:text-red-600 rounded-full w-[60px] hover:bg-gray-300  absolute top-0 left-0 md:left-16   p-3 z-10'>
        <i class="fa-solid text-xl  fa-3"></i>
            </button>
          <img src={ferrari} className='md:w-[220px] w-[300px] hover:bg-gray-200 cursor-pointer h-[300px] md:h-[220px] bg-white rounded-full pt-5' alt='' />
          <img src={scudera} className='-mt-24 w-[270px] ' alt='' />
          
          <div className='flex flex-col justify-center items-center text-center'>
        
          <h1 className='text-white  text-4xl  font-semibold '>RedBul Racing</h1>
          <h1 className='text-white  text-2xl  font-semibold'>520.50PTS</h1>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Third