import React, { useState,useEffect } from 'react'
import team1 from '../images/team1.png'
import team2 from '../images/team2.png'
import team3 from '../images/team3.png'
import team4 from '../images/team4.png'
import team5 from '../images/team5.png'
import team6 from '../images/team6.png'
import italy from '../images/italy.jpg'
import suadi from '../images/suadi.jpg'
import australia from '../images/australia.jpg'
import bahrain from '../images/bahrain.png'
import helmet from '../images/helmet.jpg'
import last from '../images/last.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';







const TeamData = [
    { img: team1, title: "Team1","description":"The Toyota GR Corolla is an enthralling take on the hot hatch that combines sharp styling with a potent 300-hp turbocharged inline-three and a rally-inspired adjustable all-wheel-drive system. But despite its $37,595 starting price, the GR Corolla struggles to separate itself from the dour interior of the $23,145 economy car upon which it is based. But the Lexus LBX Morizo RR concept, revealed at the Tokyo auto show, previews what a more luxurious version of the hot hatch could look like. Toyota drops the same 1.6-liter powertrain into the subcompact LBX crossover sold in Europe." },
    { img: team2, title: "Team2","description":"The engine is unchanged from the version in the Corolla, with the three-pot pumping out 300 ponies and 295 pound-feet of torque. The electronically controlled all-wheel-drive system also carries over, but unlike the manual-only GR Corolla, the fancier LBX is fitted with an eight-speed automatic transmission. This gearbox is now going to be offered on the overseas-only GR Yaris, which also shares the same powertrain, so it's possible that the GR Corolla could gain an automatic option in the near future." },
    { img: team3, title: "Team3","description":" A seminal event in Saab history was the arrival of turbocharging back in the dark days of the 1970s. As our review of the then-new Saab 99 Turbo put it, Hello blower, goodbye boredom. This 1978 Saab 99 Turbo up for auction on Bring a Trailer—which, like Car and Driver, is part of Hearst Autos—is sure to chum the waters for the Saab cognoscenti.This early model with a whistling turbocharger under the hood has traveled less than 20,000 miles, is resplendent in Carmine Red, and rolls on a set of iconic 15-inch Inca wheels (which are specific to the 99 Turbo and designed to look like the blades of a compressor). On the first day of the auction, bidding raced past $35,000. " },
    { img: team4, title: "Team4","description":"It's no secret that it's difficult for women to gain traction in motorsports, whether it's as a driver (fewer than 5 percent of elite-level pilots identify as female), or as an engineer or racing team member (between 10 percent and 20 percent in a top series like Formula 1). This week, Formula E team Mahindra underscored this gap by launching something it called Ava Beyond Reality, an artificially created, female-presenting AI Ambassador that was met with such negativity from the team's fanbase that the entire program was wiped from the internet in less than 48 hours." },
    { img: team5, title: "Team5","description":"The vapidity of the entire profile seemingly supports Southwell's interpretation of Mahindra's misguided effort, which makes it even more painful to realize that it could have at least imparted its machine-generated team member with an engineering or technical backstory tied to its role in promoting sustainability. Then of course, there's the decision to digitally impersonate a woman rather than give a human being an opportunity to gain a foothold in a notoriously hard-to-crack industry." },
    { img: team6, title: "Team6","description":"U-turns offer ideal opportunities for exploring the systems' capabilities, as they combine sharp inputs from all the linked componentry. Will takes advantage of this on our night drive through the back streets of Las Vegas, whilst the banger Players, by Coi Leray, booms on the Benz's Burmester audio system. The experience has an undiagnosed impact on our limbic system, and we can't help but giggle. Like so many modern in-car features, it's nonsensical, but kind of delightful." }
];


const Team = ({ img, title, onClick }) => (
    <div onClick={onClick} className='flex flex-col gap-[10px] items-start'>
        <h1 className='text-white font-bold'>{title}</h1>
        <img src={img} className='w-[300px] -mt-12 h-[200px]' alt='' />
    </div>
);

function Fifth() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (index) => {
        setSelected(TeamData[index]);
    };

    useEffect(() => {
        AOS.init({
           
          easing: 'ease-in-out'
        });
      }, []);
    

    return (
        <div>
        <div className='bg-red-600 py-20 mt-20'>
            <div className='text-white text-center flex-col flex gap-4'>
                <h1 className='text-2xl font-bold'>2022</h1>
                <h1 className='text-4xl font-bold'>F1 TEAMS</h1>
                <h1 className='text-base '>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</h1>
            </div>
        
            <div className='flex flex-col md:flex-row gap-20 justify-center p-10'>
                <div className='w-full md:w-[70%] flex flex-wrap gap-[50px]'>
                    {TeamData.map((team, index) => (
                        <Team
                            key={index}
                            img={team.img}
                            title={team.title}
                            onClick={() => handleSelect(index)}
                        />
                    ))}
                </div>
                {selected && (
                <div className='flex flex-col w-full md:w-1/2 items-start'>
                    <img src={selected.img} className='w-full' alt={selected.description} />
                    <h1 className='text-white text-4xl font-bold '>{selected.title}</h1>
                    <p className='text-white text-xl font-base'> {selected.description}</p>
                </div>
            )}
            </div>

         
            
        </div>

        <div className='relative overflow-hidden bg-white mt-32  flex flex-col md:flex-col lg:flex-row justify-center  items-center '>
    <div className='text-center w-full flex flex-col justify-center items-center font-bold'>
      <h1 className='text-red-600 text-xl md:text-2xl  '>F1 Race</h1>
      <h1 className='text-Black text-4xl md:text-6xl  '>Schedule</h1>
      </div> 
     
    </div>
        
        <div className='flex flex-col gap-5 md:flex-row justify-center mt-20 p-10 items-center'>
    <div className='w-full md:w-1/2 lg:w-1/4 relative'>
        <img src={italy} className='hover:opacity-100 cursor-pointer w-full h-[250px] opacity-80' alt=''/>
        <h1 className='absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-white cursor-pointer'>ITALY</h1>
        <h1 className='absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-white cursor-pointer'>2022</h1>
    </div>
    <div className='w-full md:w-1/2 lg:w-1/4 relative'>
        <img src={suadi} className='hover:opacity-100 cursor-pointer w-full h-[250px] opacity-80' alt=''/>
        <h1 className='absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-white cursor-pointer'>SUADI_ARABIA</h1>
        <h1 className='absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-white cursor-pointer'>2022</h1>
    </div>
    <div className='w-full md:w-1/2 lg:w-1/4 relative'>
        <img src={bahrain} className ='hover:opacity-100 cursor-pointer w-full h-[250px] opacity-80' alt=''/>
        <h1 className='absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-white cursor-pointer'>BAHRAIN</h1>
        <h1 className='absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-white cursor-pointer'>2022</h1>
    </div>
    <div className='w-full md:w-1/2 lg:w-1/4 relative'>
        <img src={australia} className='hover:opacity-100 cursor-pointer w-full h-[250px] opacity-80' alt=''/>
        <h1 className='absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-white cursor-pointer'>AUSTRTALIAN</h1>
        <h1 className='absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold text-white cursor-pointer'>2022</h1>
    </div>
</div>
      
      
         <div className='bg-red-600 flex flex-col md:flex-row justify-between p-20 mt-52'>
            <div className='flex flex-col w-full md:w-2/3'>
                <h1 className='text-white text-2xl'>Join Our Mailing List And</h1>
                <h1 className='text-white font-bold text-4xl'>Get Closer To The Action With  F1 TV</h1>
            </div>
            <div ><button className='bg-white hover:bg-black  text-red-500 hover:text-white mt-10 md:mt-4 -skew-x-12   font-bold px-10 p-4'>Subscribe Now<i class="fa-solid fa-angle-right"></i></button></div>
         </div>           


         <div className='flex flex-col gap-5 md:flex-row justify-center mt-10 p-10 items-center'>
    <div className='w-full md:w-1/2  relative'>
        <img src={last} className='w-full h-[300px] md:h-[450px] ' alt=''/>
        <h1 className='absolute w-2/3 text-center left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-4xl font-bold text-white '>F1 AUTHENTICS - F1 AND  TEAM MEMORABILIA</h1>

        <button className='absolute left-1/2 top-[75%] transform -translate-x-1/2 -translate-y-1/2 bg-red-600 hover:bg-white  text-white hover:text-red-600 mt-10 md:mt-4 -skew-x-12   font-bold md:px-10 px-3  md:p-4'>Shop Now<i class="fa-solid fa-angle-right"></i></button>
    </div>
    <div className='w-full md:w-1/2  relative'>
        <img src={helmet} className='w-full h-[300px] md:h-[450px] ' alt=''/>
        <h1 className='absolute w-2/3 text-center left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-4xl font-bold text-white '>F1 STORE OFFICIAL  F1 AND  TEAM MERCHANDICE  </h1>
       
        <button className='absolute left-1/2 top-[75%] transform -translate-x-1/2 -translate-y-1/2 bg-red-600 hover:bg-white  text-white hover:text-red-600 mt-10 md:mt-4 -skew-x-12   font-bold md:px-10 px-3  md:p-4'>Shop Now<i class="fa-solid fa-angle-right"></i></button>
    </div>
    </div>
        </div>
    );
}

export default Fifth;
