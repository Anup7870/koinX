import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import axios from "axios";
export default function Allcoins() {
   const [allCoin, setAllcoin] = useState(null);
   // screen widht
   const [width, setWidth] = useState(null);
   useEffect(() => {
      setWidth(window.innerWidth);
   });
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
      console.log(allCoin);
   }, []);
   return (
      <div className='w-full bg-[#ffff] relative  lg:absolute'>
         <h1 className='font-semibold text-2xl pt-10'>You May Also Like</h1>

         <div className=' overflow-hidden'>
            <Swiper
               cssMode={true}
               navigation={true}
               //  pagination={true}
               mousewheel={true}
               keyboard={true}
               // slidesPerView={1.5}
               breakpoints={{
                  // for biggerscreen
                  1025: {
                     slidesPerView: 5,
                  },
                  // for smaller screen
                  768: {
                     slidesPerView: 1.5,
                  },
               }}
               modules={[Navigation, Pagination, Mousewheel, Keyboard]}
               className='mySwiper mt-5'>
               {allCoin &&
                  allCoin.map((coin) => {
                     return (
                        <SwiperSlide key={coin.item.coin_id}>
                           <div className='h-[9rem] md:h-[10rem] w-[60%] md:w-[252px] border-[2px] border-[#E3E3E3] rounded-lg p-3'>
                              <div className='flex items-center gap-2'>
                                 <img
                                    src={coin.item.small}
                                    alt=''
                                    className='rounded-full w-10 h-10 md:h-auto md:w-auto'
                                 />
                                 <div className='flex'>
                                    <p className=' md:text-[16px] text-[14px] font-normal'>
                                       {coin.item.symbol}
                                    </p>
                                    <p className='font-medium flex text-[14px]  text-[#14B079]  bg-[#EBF9F4] px-1 item-center self-center justify-center  '>
                                       {/* <GoTriangleUp size={"1.3rem"} /> */}+
                                       2.51%
                                    </p>
                                 </div>
                              </div>
                              <p>{coin.item.data.price}</p>
                              <img
                                 src={coin.item.data.sparkline}
                                 alt=''
                                 className='w-full px-8 mr-2'
                              />
                           </div>
                        </SwiperSlide>
                     );
                  })}
            </Swiper>
            <h1 className='font-semibold text-2xl pt-10'>Trending Coins</h1>
            <Swiper
               cssMode={true}
               navigation={true}
               //  pagination={true}
               mousewheel={true}
               keyboard={true}
               slidesPerView={width < 768 ? 2.5 : 5}
               slidePrevClass={1}
               //  spaceBetween={10}
               modules={[Navigation, Pagination, Mousewheel, Keyboard]}
               className='mySwiper mt-10'>
               {allCoin &&
                  allCoin.map((coin) => {
                     return (
                        <SwiperSlide key={coin.item.coin_id}>
                           <div className='h-[10rem] w-[252px] border-[2px] border-[#E3E3E3] rounded-lg p-3'>
                              <div className='flex items-center gap-2'>
                                 <img
                                    src={coin.item.small}
                                    alt=''
                                    className='rounded-full'
                                 />
                                 <div className='flex'>
                                    <p className=' text-[16px] font-normal'>
                                       {coin.item.symbol}
                                    </p>
                                    <p className='font-medium flex  text-[#14B079]  bg-[#EBF9F4] px-1 item-center self-center justify-center  '>
                                       {/* <GoTriangleUp size={"1.3rem"} /> */}+
                                       2.51%
                                    </p>
                                 </div>
                              </div>
                              <p>{coin.item.data.price}</p>
                              <img
                                 src={coin.item.data.sparkline}
                                 alt=''
                                 className='w-full px-8 mr-2'
                              />
                           </div>
                        </SwiperSlide>
                     );
                  })}
            </Swiper>
         </div>
      </div>
   );
}
