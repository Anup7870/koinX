import { useState } from "react";
import "./App.css";
import { Button } from "flowbite-react";
import { FiChevronsRight } from "react-icons/fi";
import Header from "./components/Header";
import Body from "./components/Body";
import Chart from "./components/Chart";
import RightFlag from "./components/RightFlag";
import TopCoins from "./components/TopCoins";
function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <div>
            <Header />
            <Body>
               <p className='py-4 font-normal text-gray-800 text-[.9rem] flex items-center gap-1'>
                  Cryptocurrencies
                  <FiChevronsRight />
                  <span className='text-semibold text-[1.1rem] font-[#0F1629]'>
                     Bitcoin
                  </span>
               </p>
               <main className='w-full flex flex-col lg:flex-row'>
                  {/* Left */}
                  <div className='w-full lg:w-[66%] '>
                     <Chart />
                  </div>
                  {/* Right */}
                  <div className='w-full lg:w-[34%] pl-0 lg:pl-6 '>
                     <RightFlag />
                     <TopCoins />
                  </div>
               </main>
            </Body>
         </div>
      </>
   );
}

export default App;
