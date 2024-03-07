import React from "react";
import TradingView from "./TradingView";
import btc from "../assets/btc.png";
import { Button } from "flowbite-react";
import { GoTriangleUp } from "react-icons/go";
export default function Chart() {
   return (
      <div className='w-full bg-[#DEDFE2] lg:bg-[#ffff] rounded-lg px-0 lg:px-7 h-screen '>
         <div className='flex gap-10 py-4 items-center'>
            <div className='flex gap-2 items-center'>
               <img src={btc} alt='' />
               <p className='font-semibold text-2xl'> Bitcoin</p>
               <span className='mb-[2px] text-sm font-semibold text-[#5D667B]'>
                  BTC
               </span>
            </div>
            <Button className='bg-[#808A9D]'>Rank #1</Button>
         </div>
         <div className='pb-3'>
            <div className='flex gap-4 '>
               <p className='font-bold text-3xl'>$46,953.04</p>
               <div className='flex gap-2 items-center'>
                  <p className='font-medium flex  text-[#14B079]  bg-[#EBF9F4] px-1 item-center self-center justify-center rounded-md '>
                     <GoTriangleUp size={"1.3rem"} />
                     2.51%
                  </p>
                  <span className='font-medium text-[#5D667B]'>(24H)</span>
               </div>
            </div>
            <p className='font-medium'> &#8377; 39,42,343</p>
         </div>
         <TradingView className='w-full h-full' />
      </div>
   );
}
