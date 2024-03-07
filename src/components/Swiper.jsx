import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import seg1 from "../assets/seg1.png";
import seg2 from "../assets/seg2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function App() {
   return (
      <>
         <Swiper
            slidesPerView={1.8}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            // grabCursor={true}
            keyboard={{
               enabled: true,
            }}
            // breakpoints={{
            //    769: {
            //       slidesPerView: 2,
            //       slidesPerGroup: 1,
            //    },
            // }}
            spaceBetween={160}
            scrollbar={true}
            navigation={true}
            // pagination={{
            //    clickable: true,
            // }}

            modules={[Keyboard, Navigation, Pagination]}
            className='mySwiper'>
            <SwiperSlide>
               <div className='bg-[#E8F4FD] flex p-3 rounded-xl w-[15rem] h-[8rem] lg:w-[30rem]'>
                  <div className='p-1'>
                     <img
                        className=' w-[4em] lg:w-[5em] '
                        src={seg1}
                        alt=''
                        srcset=''
                     />
                  </div>
                  <div className='ml-1'>
                     <p className='font-medium text-[10px] lg:text-sm text-[#191C1F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio eaque eligend
                     </p>
                     <p className='font-base text-[8px] lg:text-sm text-gray mt-2 Turncate'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iste eos voluptatem, id dignissimos a mollitia
                        distinctio ullam blanditiis natus vitae fuga tenetur
                        nostrum libero nisi, provident eum deserunt ducimus
                        veniam?
                     </p>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className='bg-[#E8F4FD] flex p-3 rounded-xl  w-[15rem] h-[8rem] lg:w-[30rem]'>
                  <div className='p-1'>
                     <img
                        className=' w-[4em] lg:w-[5em] '
                        src={seg2}
                        alt=''
                        srcset=''
                     />
                  </div>
                  <div className='ml-1'>
                     <p className='font-medium text-[10px]  lg:text-sm text-[#191C1F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio eaque eligendi in accusantium sunt.
                     </p>
                     <p className='font-base text-[8px]  lg:text-sm text-gray mt-2'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iste eos voluptatem, id dignissimos a mollitia
                        distinctio ullam blanditiis natus vitae fuga tenetur
                        nostrum libero nisi, provident eum deserunt ducimus
                        veniam?
                     </p>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
}
