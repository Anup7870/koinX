import React from "react";
import { GoTriangleUp } from "react-icons/go";
import btc2 from "../assets/btc2.png";
import eth from "../assets/eth.png";
import poly from "../assets/poly.png";
import { useEffect, useState } from "react";
import axios from "axios";
export default function TopCoins() {
   const [allCoin, setAllcoin] = useState(null);
   useEffect(() => {
      const fetchAllCoins = async () => {
         const fetch = await axios
            .get(
               "https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-Z1FwLLwgGxivPNcUf7WKGeum"
            )
            .then((res) => {
               setAllcoin(res.data.coins);
            });
      };
      fetchAllCoins();
      console.log(allCoin.slice(0, 3));
   }, []);
   return (
      <>
         <div className='w-full bg-[#ffff] rounded-lg mt-4 p-5'>
            <h1 className='text-xl font-bold text-[#0F1629]'>
               Trending Coins (24)
            </h1>
            <div className='mt-5 flex flex-col gap-5'>
               {/* {allCoin &&
                  allCoin.slice(0, 3).map((item) => {
                     return (
                        <div
                           key={index}
                           className='flex flex-row justify-between'>
                           <div className='flex gap-1'>
                              <img src={item.image} /> <p>{item.name}</p>
                           </div>
                           <p className='font-medium flex  text-[#14B079]  bg-[#EBF9F4] px-1 item-center self-center justify-center rounded-md '>
                              <GoTriangleUp size={"1.3rem"} />
                              {item.price_change_percentage_24h}
                           </p>
                        </div>
                     );
                  })} */}
               <div className='flex flex-row justify-between'>
                  <div className='flex gap-1'>
                     <img src={btc2} /> <p>Bitcoin (BTC)</p>
                  </div>
                  <p className='font-medium flex  text-[#14B079]  bg-[#EBF9F4] px-1 item-center self-center justify-center rounded-md '>
                     <GoTriangleUp size={"1.3rem"} />
                     2.51%
                  </p>
               </div>
               <div className='flex flex-row justify-between'>
                  <div className='flex gap-1'>
                     <img src={eth} /> Etherrium (ETH)
                  </div>
                  <p className='font-medium flex  text-[#14B079]  bg-[#EBF9F4] px-1 item-center self-center justify-center rounded-md '>
                     <GoTriangleUp size={"1.3rem"} />
                     2.51%
                  </p>
               </div>
               <div className='flex flex-row justify-between'>
                  <div className='flex gap-1'>
                     <img src={poly} /> Polygon (MATIC)
                  </div>
                  <p className='font-medium flex  text-[#14B079]  bg-[#EBF9F4] px-1 item-center self-center justify-center rounded-md '>
                     <GoTriangleUp size={"1.3rem"} />
                     2.51%
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}
