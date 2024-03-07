import React from "react";
import Frame from "../assets/Frame.png";
import { Button } from "flowbite-react";
import { GoArrowRight } from "react-icons/go";
export default function RightFlag() {
   return (
      <div className=' w-full bg-[#1F67FF]  rounded-xl text-center px-3 pb-7 flex flex-col  items-center  lg:p-10'>
         <div className='flex flex-col items-center'>
            <img src={Frame} alt='' srcset='' className='md:order-1 mt-10' />
            <div className=' '>
               <h1 className=' font-bold text-xl lg:text-2xl text-white px-0 lg:px-5'>
                  Get statrted with KoinX for FREE
               </h1>
               <p className='text-sm mt-5 text-[#F2F2F2]'>
                  With our range of features that you can equipe for free, KoinX
                  allows you to be more educated and aware of your tax reports.
               </p>
            </div>
         </div>
         <Button className='h-12 w-[15rem] mt-7 bg-[#ffff] text-[#0F1629 ] font-semibold text-lg'>
            Get Started for FREE <GoArrowRight className='ml-1 w-3' />
         </Button>
      </div>
   );
}
