import React from "react";
import { GoTriangleUp } from "react-icons/go";

export default function TopCoins() {
   return (
      <>
         <div>
            <h1>Trending Coins (24)</h1>
            <div>
               <div>
                  <div>Etherrium(ETH)</div>
                  <p className='font-medium flex  text-[#14B079] '>
                     <GoTriangleUp size={"1.3rem"} />
                     2.51%
                  </p>
               </div>
               <div>
                  <div>Etherrium(ETH)</div>
                  <p className='font-medium flex  text-[#14B079] '>
                     <GoTriangleUp size={"1.3rem"} />
                     2.51%
                  </p>
               </div>
               <div>
                  <div>Etherrium(ETH)</div>
                  <p className='font-medium flex  text-[#14B079] '>
                     <GoTriangleUp size={"1.3rem"} />
                     2.51%
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}
