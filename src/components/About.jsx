import { Button } from "flowbite-react";
import React from "react";
import divmob from "../assets/divmob.png";
import divmob2 from "../assets/divmob2.png";
import { GoArrowRight } from "react-icons/go";
export default function About() {
   return (
      <div className='w-full bg-[#ffff] lg:p-8 p-6 rounded-lg mt-6 '>
         <h1 className='font-semibold text-2xl'>About Bitcoin</h1>
         <div>
            <h1 className='font-bold text-lg mt-3'>What is Bitcoin</h1>
            <p className='font-medium text-base mt-3'>
               Bitcoin’s price today is US$16,951.82, with a 24-hour trading
               volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
               currently -7.70% from its 7-day all-time high of $18,366.66, and
               3.40% from its 7-day all-time low of $16,394.75. BTC has a
               circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
         </div>
         <div className='my-5 w-full h-[1px] bg-gray-200'></div>
         <div>
            <h1 className='font-semibold text-2xl mt-3'>
               Lorem ipsum dolor sit amet
            </h1>
            <p className='font-medium text-base mt-3'>
               Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
               lobortis tristique pharetra. Diam id et lectus urna et tellus
               aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
               sed. Quam scelerisque fermentum sapien morbi sodales odio sed
               rhoncus.
               <br />
               <br /> Ultricies urna volutpat pendisse enim facilisi diam ut
               sed. Quam scelerisque fermentum sapien morbi sodales odio sed
               rhoncus. Diam praesent massa dapibus magna aliquam a dictumst
               volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis
               libero adipiscing cursus felis pellentesque interdum. Odio cursus
               phasellus velit in senectus enim dui. Turpis tristique placerat
               interdum sed volutpat. <br />
               <br /> Id imperdiet magna eget eros donec cursus nunc. Mauris
               faucibus diam mi nunc praesent massa turpis a. Integer dignissim
               augue viverra nulla et quis lobortis phasellus. Integer
               pellentesque enim convallis ultricies at. Fermentum hendrerit
               imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis
               duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc
               risus. Fermentum potenti iaculis lacinia congue ipsum fames amet
               dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
         </div>
         <div className='my-5 w-full h-[1px] bg-gray-200'></div>
         <div>
            <h1 className='font-semibold text-2xl mt-3'>
               Already Holding Bitcoin ?
            </h1>
            <div className='mt-4 flex justify-between'>
               <div
                  className='w-[48%] p-3 pl-3 rounded-lg flex gap-5'
                  style={{
                     background:
                        "linear-gradient(135deg, rgba(121,241,164,1) 12%, rgba(14,92,173,1) 51%)",
                  }}>
                  <img src={divmob} alt='' srcset='' />
                  <div className='flex flex-col py-2 pr-3 justify-between'>
                     <p className='font-bold text-[20px] text-white'>
                        Calculate your Profit
                     </p>
                     <Button className='bg-gray-200 text-[#ffff] h-9 w-15 flex gap-3 font-semibold text-xs items-center text-black'>
                        Check Now
                        <GoArrowRight className='ml-3' size={"20px"} />
                     </Button>
                  </div>
               </div>
               <div
                  className='w-[48%] p-3  rounded-lg flex gap-6'
                  style={{
                     background:
                        "linear-gradient(135deg, rgba(255,152,101,1) 12%, rgba(239,48,49,1) 51%)",
                  }}>
                  <img src={divmob2} alt='' srcset='' />
                  <div className='flex flex-col py-2 pr-3 justify-between'>
                     <p className='font-bold text-[20px] text-white'>
                        Calculate your tax liability
                     </p>
                     <Button className='bg-gray-200 text-[#ffff] h-9 w-15 flex gap-3 font-semibold text-xs items-center text-black'>
                        Check Now
                        <GoArrowRight className='ml-3' size={"20px"} />
                     </Button>
                  </div>
               </div>
            </div>
            <div className='my-5 w-full h-[1px] bg-gray-200'></div>
            <p className='font-medium text-base'>
               Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
               massa vel convallis duis ac. Mi adipiscing semper scelerisque
               porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
               congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
               eget. Ullamcorper dui
            </p>
         </div>
      </div>
   );
}
