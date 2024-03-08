import { useState } from "react";
import "./App.css";
import { Button, Navbar } from "flowbite-react";
import { FiChevronsRight } from "react-icons/fi";
import Header from "./components/Header";
import Body from "./components/Body";
import Chart from "./components/Chart";
import RightFlag from "./components/RightFlag";
import TopCoins from "./components/TopCoins";
import Performance from "./components/Performance";
import Sentiment from "./components/Sentiment";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import Allcoins from "./components/Allcoins";
function App() {
   const [active, setActive] = useState("Overview");

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
               <main className='w-full flex flex-col gap-6 lg:flex-row'>
                  {/* Left */}
                  <div className='w-full lg:w-[66%] '>
                     <Chart />
                     <div className='border-b-2 border-gray-400 '>
                        <ul className='flex   overflow-auto'>
                           <li
                              className={`font-medium lg:font-semibold cursor-pointer py-6 pr-7 ${
                                 active === "Overview"
                                    ? "text-[#0141CF] border-b-4 border-[#0141CF]"
                                    : "text-[#3E424A] "
                              }`}
                              onClick={() => {
                                 setActive("Overview");
                              }}>
                              Overview
                           </li>
                           <li
                              // className=' font-sm lg:font-medium cursor-pointer'
                              className={`font-medium lg:font-semibold cursor-pointer py-6 pr-7 ${
                                 active === "Fundamental"
                                    ? "text-[#0141CF] border-b-4 border-[#0141CF]"
                                    : "text-[#3E424A]   "
                              }`}
                              onClick={() => {
                                 setActive("Fundamental");
                              }}>
                              Fundamental
                           </li>
                           <li
                              // className='font-sm  lg:font-medium cursor-pointer  whitespace-nowrap'
                              className={`font-medium lg:font-semibold cursor-pointer py-6 pr-7 whitespace-nowrap ${
                                 active === "Insights"
                                    ? "text-[#0141CF] border-b-4 border-[#0141CF]"
                                    : "text-[#3E424A]  "
                              }`}
                              onClick={() => {
                                 setActive("Insights");
                              }}>
                              News Insights
                           </li>
                           <li
                              // className='font-sm lg:font-medium cursor-pointer'
                              className={`font-medium lg:font-semibold cursor-pointer py-6 pr-7 ${
                                 active === "Sentiments"
                                    ? "text-[#0141CF] border-b-4 border-[#0141CF]"
                                    : "text-[#3E424A]  "
                              }`}
                              onClick={() => {
                                 setActive("Sentiments");
                              }}>
                              Sentiments
                           </li>
                           <li
                              // className='font-sm lg:font-medium cursor-pointer'
                              className={`font-medium lg:font-semibold cursor-pointer py-6 pr-7 ${
                                 active === "Team"
                                    ? "text-[#0141CF] border-b-4 border-[#0141CF]"
                                    : "text-[#3E424A]"
                              }`}
                              onClick={() => {
                                 setActive("Team");
                              }}>
                              Team
                           </li>
                           <li
                              // className='font-sm lg:font-medium cursor-pointer'
                              className={`font-medium lg:font-semibold cursor-pointer py-6 pr-7 ${
                                 active === "Technicals"
                                    ? "text-[#0141CF] border-b-4 border-[#0141CF]"
                                    : "text-[#3E424A] "
                              }`}
                              onClick={() => {
                                 setActive("Technicals");
                              }}>
                              Technicals
                           </li>
                           <li
                              // className='font-sm lg:font-medium cursor-pointer'
                              className={`font-medium lg:font-semibold cursor-pointer py-6 pr-7 ${
                                 active === "Tokenomics"
                                    ? "text-[#0141CF] border-b-4 border-[#0141CF]"
                                    : "text-[#3E424A] "
                              }`}
                              onClick={() => {
                                 setActive("Tokenomics");
                              }}>
                              Tokenomics
                           </li>
                        </ul>
                     </div>
                     <Performance />
                     <Sentiment />
                     <About />
                     <Tokenomics className='' />
                     <Team />
                     <Allcoins />
                  </div>
                  {/* Right */}
                  <div className='w-full lg:w-[34%]  '>
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
