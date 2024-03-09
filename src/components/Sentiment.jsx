import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import seg1 from "../assets/seg1.png";
import seg2 from "../assets/seg2.png";
import Swiper from "./Swiper";
import { Progress } from "flowbite-react";
export default function Sentiment() {
   return (
      <div className='w-full bg-[#ffff] md:p-8 p-6 rounded-lg mt-6 '>
         <h1 className='font-semibold text-2xl'>Sentiment</h1>
         <div className='text-[#44475B] mt-6 w-full'>
            <h1 className='font-semibold text-lg flex gap-1 items-center'>
               Fundamental
               <IoMdInformationCircle fill='gray' />
            </h1>
            {/* card */}
            <div className='mt-3 w-full  '>
               <Swiper />
            </div>
            <h1 className='font-semibold text-lg flex gap-1 items-center mt-3'>
               Analyst Estimates
               <IoMdInformationCircle fill='gray' />
            </h1>
            <div className='w-full mt-2 flex flex-row items-center   gap-4'>
               <div className='rounded-full w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] bg-[#EBF9F4] flex justify-center items-center '>
                  <span className='text-[#0FBA83] text-2xl'>76%</span>
               </div>

               <div className='bg-blue w-[70%] flex flex-col gap-7 mt-5'>
                  <div className='w-full h-2 flex gap-3 items-center'>
                     <p>Buy</p>
                     <div className='w-[76%] h-full bg-[#00B386] rounded-lg'></div>
                     76%
                  </div>
                  <div className='w-full h-2 flex gap-3 items-center'>
                     <p>Hold</p>
                     <div className='w-[8%] h-full bg-[#C7C8CE] rounded-lg'></div>
                     8%
                  </div>
                  <div className='w-full h-2 flex gap-3 items-center'>
                     <p>Sell</p>
                     <div className='w-[16%] h-full bg-red-500 rounded-lg'></div>
                     16%
                  </div>

                  {/* </div> */}
               </div>
            </div>
         </div>
      </div>
   );
}
