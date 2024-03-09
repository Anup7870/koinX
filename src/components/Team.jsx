import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
export default function Team() {
   return (
      <div className='w-full bg-[#ffff] md:p-8 p-6 rounded-t-lg md:rounded-lg mt-6 mb-0 md:mb-10  '>
         <h1 className='font-semibold text-2xl'>Team</h1>
         <p className='font-medium text-base mt-4'>
            Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
            nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
            quam. Facilisis purus convallis quam augue.
         </p>
         <section className='mt-3 flex flex-col gap-6'>
            <div className='w-full bg-[#EBF9F4] flex flex-col md:flex-row items-center gap-10 px-6 py-3 rounded-lg'>
               <div className='flex flex-col'>
                  <img src={person1} alt='' className='rounded-xl' />
                  <p className='flex flex-col gap-1 whitespace-nowrap font-semibold text-[15px] text-center mt-1'>
                     John Smith{" "}
                     <span className='font-medium text-[12px]'>
                        Designation here
                     </span>
                  </p>
               </div>
               <p className='font-regular text-[14px]  '>
                  Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                  sit fermentum ut libero hendrerit id. Tellus sit ornare netus
                  sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                  sociis laoreet nec neque sed pellentesque viverra. Consectetur
                  proin amet ut id facilisi quis consectetur. Tellus gravida
                  ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                  etiam mi gravida praesent interdu
               </p>
            </div>
            <div className='w-full bg-[#EBF9F4] flex flex-col md:flex-row items-center gap-10 px-6 py-3 rounded-lg'>
               <div className='flex flex-col'>
                  <img src={person2} alt='' className='rounded-xl' />
                  <p className='flex flex-col gap-1 whitespace-nowrap font-semibold text-[15px] text-center mt-1'>
                     John Smith{" "}
                     <span className='font-medium text-[12px]'>
                        Designation here
                     </span>
                  </p>
               </div>
               <p className='font-regular text-[14px] '>
                  Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                  sit fermentum ut libero hendrerit id. Tellus sit ornare netus
                  sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                  sociis laoreet nec neque sed pellentesque viverra. Consectetur
                  proin amet ut id facilisi quis consectetur. Tellus gravida
                  ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                  etiam mi gravida praesent interdu
               </p>
            </div>
            <div className='w-full bg-[#EBF9F4] flex flex-col md:flex-row items-center gap-10 px-6 py-3 rounded-lg'>
               <div className='flex flex-col'>
                  <img src={person3} alt='' className='rounded-xl' />
                  <p className='flex flex-col gap-1 whitespace-nowrap font-semibold text-[15px] text-center mt-1'>
                     Elina Williams{" "}
                     <span className='font-medium text-[12px]'>
                        Designation here
                     </span>
                  </p>
               </div>
               <p className='font-regular text-[14px] '>
                  Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                  sit fermentum ut libero hendrerit id. Tellus sit ornare netus
                  sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                  sociis laoreet nec neque sed pellentesque viverra. Consectetur
                  proin amet ut id facilisi quis consectetur. Tellus gravida
                  ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                  etiam mi gravida praesent interdu
               </p>
            </div>
         </section>
      </div>
   );
}
