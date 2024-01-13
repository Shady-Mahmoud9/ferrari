import React from 'react'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import news3 from '../images/news3.jpg'
import news4 from '../images/news4.jpg'
import news5 from '../images/news5.jpg'
import news6 from '../images/news6.jpg'
import wallpaper from '../images/wallaper.png'
function Fourth() {

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
      <div className='bg-white mt-32 flex flex-col md:flex-row justify-center  items-center '>
    <div className='text-center  flex flex-col ml-0 md:ml-auto justify-center items-center font-bold'>
      <h1 className='text-red-600 text-xl md:text-2xl  '>Featured</h1>
      <h1 className='text-Black text-4xl md:text-6xl  '>Topics</h1>
      </div> 
      <div className='ml-0 md:ml-auto pr-0 md:pr-8'><button className='bg-red-600 hover:bg-red-400 text-white hover:text-gray-600 mt-10 md:mt-4 -skew-x-12   font-bold px-10 p-4'>Veiw All <i class="fa-solid fa-angle-right"></i></button>
      </div>
    </div>

    <div className='flex mt-32 flex-col flex-wrap gap-y-16 md:gap-y-20 gap-5 md:gap-10 md:flex-row w-full p-10'>
    
    
      {
        news.map((item)=>{
          return(<div className='w-full md:w-[450px] text-center'>
          <img src={item.image} className='w-full h-[200px] md:h-[300px] rounded-md' alt='' />
           <h1 className='text-red-600 text-2xl font-semibold  mt-4 md:mt-8'>news</h1>
           <h1 className='text-black text-3xl font-semibold  mt-4'>{item.description}</h1>
             </div>)
        })
      }
    
   </div>
    
   <div className='w-full p-10 '>
      <img src={wallpaper} className='w-full h-[200px] md:h-[600px]' alt=''></img>
    </div>
    
    <div className='bg-white mt-32 flex flex-col md:flex-row justify-center  items-center '>
    <div className='text-center  flex flex-col ml-0 md:ml-auto justify-center items-center font-bold'>
      <h1 className='text-red-600 text-xl md:text-2xl  '>Featured</h1>
      <h1 className='text-Black text-4xl md:text-6xl  '>News</h1>
      </div> 
      <div className='ml-0 md:ml-auto pr-0 md:pr-8'><button className='bg-red-600 hover:bg-red-400 text-white hover:text-gray-600 mt-10 md:mt-4 -skew-x-12   font-bold px-10 p-4'>Veiw All <i class="fa-solid fa-angle-right"></i></button>
      </div>
    </div>

    <div className='flex mt-32 flex-col flex-wrap gap-y-16 md:gap-y-20 gap-5 md:gap-10 md:flex-row w-full p-10'>
    
    
      {
        neww.map((item)=>{
          return(<div className='w-full md:w-[450px] text-center'>
          <img src={item.image} className='w-full h-[200px] md:h-[300px] rounded-md' alt='' />
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