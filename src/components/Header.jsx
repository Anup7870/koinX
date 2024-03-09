import { Button, Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Header() {
   return (
      <Navbar fluid rounded className='border-b-2 py-4'>
         <Navbar.Brand href='*' className='ml-2'>
            <img
               src={logo}
               className='mr-3 h-6 sm:h-9'
               alt='Flowbite React Logo'
            />
         </Navbar.Brand>
         {/* <div className='flex flex-col gap-4 items-center'> */}
         <div className='md:order-2 '>
            <Button className='bg-[#2870EA] w-25 text-[#ffff] hidden md:block text-xl textStroke'>
               Get started
            </Button>
            <Navbar.Toggle />
         </div>

         <Navbar.Collapse className=' ml-0 md:ml-[35rem]'>
            <Navbar.Link
               href='#'
               className='text-[#0F1629] font-semibold text-lg'>
               Crypto Taxes
            </Navbar.Link>
            <Navbar.Link
               href='#'
               className='text-[#0F1629] font-semibold text-lg'>
               Free Tools
            </Navbar.Link>
            <Navbar.Link
               href='#'
               className='text-[#0F1629] font-semibold text-lg'>
               Resource Center
            </Navbar.Link>
         </Navbar.Collapse>
         {/* </div> */}
      </Navbar>
   );
}
