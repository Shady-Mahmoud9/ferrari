import React ,{useEffect} from 'react'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import news3 from '../images/news3.jpg'
import news4 from '../images/news4.jpg'
import news5 from '../images/news5.jpg'
import news6 from '../images/news6.jpg'
import wallpaper from '../images/wallaper.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Fourth() {


  useEffect(() => {
    AOS.init({
       
      easing: 'ease-in-out'
    });
  }, []);

  const news = [
    {
      "image": news3,
      "description" : "Verstappen and Leclerc reflect on ‘amazing’ journey from karting rivals to sharing success in F1"
    },
    {
      "image": news2,
      "description" : "Perez admits it will be a challenge to topple Verstappen and go for 2024 championship glory"
    },
     {
      "image": news1,
      "description" : "Mercedes will change almost every component on 2024 car to take fight to Red Bull, says Wolff"
    }
    ]

    const neww = [
      {
        "image": news4,
        "description" : "DRIVER MARKET: There are no changes this season, but who could be on the move for 2025?"
      },
      {
        "image": news5,
        "description" : "Haas Technical Director Simone Resta departs role after conclusion of loan arrangement"
      },
       {
        "image": news6,
        "description" : "Aston Martin become latest team to reveal 2024 car launch date"
      }
      ]


  return (
    <div>
          <div className=' overflow-hidden bg-white mt-32  flex flex-col md:flex-col lg:flex-row justify-center  items-center '>
    <div className='text-center w-full flex flex-col justify-center items-center font-bold'>
      <h1 className='text-red-600 text-xl md:text-2xl  '>Featured</h1>
      <h1 className='text-Black text-4xl md:text-6xl  '>Topics</h1>
      </div> 
      
    </div>

    <div className='flex mt-32 flex-col gap-5 md:flex-row w-full p-10'>
    
    
      {
        news.map((item)=>{
          return(<div  data-aos='fade-up' data-aos-duration='1500' className='w-full md:w-1/2 text-center'>
          <img src={item.image} className='hover:opacity-90 cursor-pointer w-full h-[300px] md:h-[400px] rounded-md' alt='' />
           <h1 className='text-red-600 text-2xl font-semibold  mt-4 md:mt-8'>news</h1>
           <h1 className='text-black text-3xl font-semibold  mt-4'>{item.description}</h1>
             </div>)
        })
      }
    
   </div>
    
   <div className='w-full p-10 '>
      <img src={wallpaper} className='w-full h-[200px] md:h-[600px]' alt=''></img>
    </div>
    
    <div className=' overflow-hidden bg-white mt-32  flex flex-col md:flex-col lg:flex-row justify-center  items-center '>
    <div className='text-center w-full flex flex-col justify-center items-center font-bold'>
      <h1 className='text-red-600 text-xl md:text-2xl  '>Featured</h1>
      <h1 className='text-Black text-4xl md:text-6xl  '>News</h1>
      </div> 
      
    </div>
    <div className='flex mt-32 flex-col  gap-5 md:flex-row w-full p-10'>
    
    
      {
        neww.map((item)=>{
          return(<div data-aos='fade-up' data-aos-duration='1500' className='w-full lg:w-1/3 text-center'>
          <img src={item.image} className='hover:opacity-90 cursor-pointer w-full h-[200px] md:h-[300px] rounded-md' alt='' />
           <h1 className='text-red-600 text-2xl font-semibold  mt-4 md:mt-8'>news</h1>
           <h1 className='text-black text-3xl font-semibold  mt-4'>{item.description}</h1>
             </div>)
        })
      }
    
   </div>

    </div>
  )
}

export default Fourth