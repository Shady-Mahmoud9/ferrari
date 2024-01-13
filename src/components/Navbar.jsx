import React ,{useState} from 'react'
import brand from '../images/brand.png'



    const Navbar = () => {
        const [isNavMenuHidden, setNavMenuHidden] = useState(true);
      
        const toggleNavMenu = () => {
          setNavMenuHidden(!isNavMenuHidden);
        };

  return (
    <nav className="bg-red-700 w-full gap-10 p-2 flex items-center justify-center">
      <div className="container mx-auto flex items-end justify-between">
        <div className="flex items-center">
          <img src={brand} className='w-[60px]' alt=''  />
          
        </div>
        {/* Responsive Navigation Toggle */}
        <div className="md:hidden">
          <button id="navToggle" className="text-white text-xl" onClick={toggleNavMenu}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Responsive Navigation Menu */}
      <div id="navMenu" className={` md:hidden ${isNavMenuHidden ? 'hidden' : ''}`}>
        <a href="#!" className="block p-2 text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Latest</option>
            <option value="">Latest</option>
            <option value="">Latest</option>
            <option value="">Latest</option>
          </select>
        </a>
        <a href="#!" className="block p-2 text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Schedule</option>
            <option value="">Schedule</option>
            <option value="">Schedule</option>
            <option value="">Schedule</option>
          </select>
        </a>
        <a href="#!" className="block p-2 text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Standings</option>
            <option value="">Standings</option>
            <option value="">Standings</option>
            <option value="">Standings</option>
          </select> </a>
        <a href="#!" className="block p-2 text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Drivers</option>
            <option value="">Drivers</option>
            <option value="">Drivers</option>
            <option value="">Drivers</option>
          </select>
        </a>
        <a href="#!" className="block p-2 text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Teams</option>
            <option value="">Teams</option>
            <option value="">Teams</option>
            <option value="">Teams</option>
          </select>
        </a>
        <a href="#!" className="block p-2 text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Gaming</option>
            <option value="">Gaming</option>
            <option value="">Gaming</option>
            <option value="">Gaming</option>
          </select>
        </a>
        <a href="https://shady-mahmoud.vercel.app/" className="block p-2 text-white text-xl font-bold">Contact</a>
        <a href="#!" class="hover:text-black block text-center text-white text-xl  font-bold"><i class="fa-solid fa-magnifying-glass"></i></a>
          <a href="#!" class="hover:text-black block text-center text-white text-xl  font-bold"><i class="fa-solid fa-user"></i></a>
          <a href="#!" class="hover:text-black block text-center text-white text-xl  font-bold"><i class="fa-solid fa-envelope"></i></a>
      </div>
      {/* Navigation Links (visible on larger screens) */}
      <div className="hidden  md:flex  lg:gap-16 gap-10 md:gap-8 ">
        <a href="#!" className="hover:text-black text-white text-xl font-bold ">
          <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Latest</option>
            <option value="">Latest</option>
            <option value="">Latest</option>
            <option value="">Latest</option>
          </select>
             </a>
        <a href="#!" className="hover:text-black text-white text-xl font-bold">Vedio</a>
        <a href="#!" className="hover:text-black text-white text-xl font-bold ">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Schedule</option>
            <option value="">Schedule</option>
            <option value="">Schedule</option>
            <option value="">Schedule</option>
          </select>
           </a>
        <a href="#!" className="hover:text-black text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Standings</option>
            <option value="">Standings</option>
            <option value="">Standings</option>
            <option value="">Standings</option>
          </select>
        </a>
        <a href="#!" className="hover:text-black text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Drivers</option>
            <option value="">Drivers</option>
            <option value="">Drivers</option>
            <option value="">Drivers</option>
          </select>
        </a>
        <a href="#!" className="hover:text-black text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Teams</option>
            <option value="">Teams</option>
            <option value="">Teams</option>
            <option value="">Teams</option>
          </select>
        </a>
        <a href="#!" className="hover:text-black text-white text-xl font-bold">
        <select className='bg-red-700 cursor-pointer rounded-md border-none' name="" id="" >
            <option value="">Gaming</option>
            <option value="">Gaming</option>
            <option value="">Gaming</option>
            <option value="">Gaming</option>
          </select>
        </a>
        <a href="https://shady-mahmoud.vercel.app/" className="hover:text-black text-white text-xl font-bold">Contact</a>
        <a href="#!" class="hover:text-black text-white text-xl  font-bold"><i class="fa-solid fa-magnifying-glass"></i></a>
          <a href="#!" class="hover:text-black text-white text-xl  font-bold"><i class="fa-solid fa-user"></i></a>
          <a href="#!" class="hover:text-black text-white text-xl  font-bold"><i class="fa-solid fa-envelope"></i></a>
      </div>
      
    </nav>
    
  )
}

export default Navbar