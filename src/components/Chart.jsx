import React, { useState } from "react";
import TradingView from "./TradingView";
import btc from "../assets/btc.png";
import { Button } from "flowbite-react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useEffect } from "react";
import axios from "axios";
export default function Chart() {
   const [data, setData] = useState(null);
   useEffect(() => {
      const fetchBtc = async () => {
         const api = await axios
            .get(
               "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true"
            )
            .then((res) => {
               setData(res.data.bitcoin);
            });
      };
      fetchBtc();
      // console.log(data.usd);
   }, []);
   return (
      <div className='w-full bg-[#DEDFE2] md:bg-[#ffff] rounded-lg px-0 md:px-7 h-screen '>
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
               <p className='font-bold text-3xl'>
                  ${data ? data.usd : "Loading...."}
               </p>
               <div className='flex gap-2 items-center'>
                  <p
                     className={`font-medium flex  text-[#14B079] ${
                        data && data.usd_24h_change > 0
                           ? "bg-[#EBF9F4]"
                           : "bg-red-100"
                     }  bg-[#EBF9F4] px-1 item-center self-center justify-center rounded-md `}>
                     {data && data.usd_24h_change > 0 ? (
                        <GoTriangleUp size={"1.3rem"} />
                     ) : (
                        <GoTriangleDown size={"1.3rem"} />
                     )}
                     {data ? data.usd_24h_change.toFixed(2) : "Loading..."}%
                  </p>
                  <span className='font-medium text-[#5D667B]'>(24H)</span>
               </div>
            </div>
            <p className='font-medium'>
               {" "}
               &#8377; {data ? data.inr : "Loading...."}
            </p>
         </div>
         <TradingView className='w-full h-full' />
      </div>
   );
}
