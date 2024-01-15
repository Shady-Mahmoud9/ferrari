import React ,{useEffect} from 'react'
import bg from '../images/bg.png'
import ferrarimen from '../images/ferrarimen.png'
import wallpaper from '../images/wallaper.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
 


function First() {


  useEffect(() => {
    AOS.init({
       
      easing: 'ease-in-out'
    });
  }, []);
  
  return (
    <>
    <div  className='w-full overflow-x-hidden  overflow-y-hidden flex flex-col items-center  md:h-[600px]' style={{ background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <h1 data-aos="zoom-in" data-aos-duration="2000" className='text-white text-4xl md:text-5xl lg:text-9xl text-center font-semibold pt-10 md:pt-20 '>Scudera </h1>
      <h1 data-aos="zoom-in" data-aos-duration="2000" className='text-white  text-center  font-semibold mt-0 lg:-mt-24 md:-mt-12 ' style={{ fontSize: 'clamp(70px, 15vw, 350px)' , letterSpacing:'15px' }}>Firrari</h1>
      <div  className='w-full p-10 bg-none lg:bg-white flex items-center justify-center'><img data-aos="zoom-in" data-aos-duration="2000" src={ferrarimen} className= 'mt-0 md:-mt-16 lg:-mt-72  w-[750px] ' alt="" />
      </div>
    </div>
    <div data-aos="zoom-in" data-aos-duration="2000" className='bg-white mt-10 flex flex-col text-center justify-center items-center p-10 md:p-3'>
      <h1 className='text-red-600 text-xl md:text-3xl   font-bold'>Featured</h1>
      <h1 className='text-Black text-2xl md:text-6xl   font-bold'>Ferrari Anticibating intense Fight  <br /> in 2022 As Team Power through Objectives <br /> In Madrid</h1>
      <h1 className='text-gray-400 text-sm md:text-base  mt-10 md:mt-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  <br /> in reprehenderit  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</h1>
      <button className='bg-red-600 hover:bg-red-400 text-white hover:text-gray-600 mt-10 md:mt-4 -skew-x-12   font-bold px-10 p-4'>Read Articles <i class="fa-solid fa-angle-right"></i></button>
      </div>
    <div className='w-full p-10 '>
      <img src={wallpaper} className='hover:opacity-90 cursor-pointer w-full h-[200px] md:h-[600px]' alt=''></img>
    </div>
    </>
  )
}

export default First