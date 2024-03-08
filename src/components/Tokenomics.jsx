import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, CategoryScale, Chart, DoughnutController } from "chart.js";

Chart.register(DoughnutController, ArcElement, CategoryScale);
export default function Tokenomics() {
   //  useEffect(() => {
   //     google.charts.load("current", { packages: ["corechart"] });
   //     google.charts.setOnLoadCallback(drawChart);
   //     function drawChart() {
   //        var data = google.visualization.arrayToDataTable([
   //           ["Task", "Initial Distribution"],
   //           ["Crowd incvestors", 80],
   //           ["Foundation", 20],
   //        ]);

   //        var options = {
   //           pieHole: 0.6,
   //           legend: {
   //              alignment: "center",
   //              textStyle: {
   //                 color: "black",
   //                 whiteSpace: "nowrap",
   //                 fontSize: 16,
   //                 bold: true,
   //              },
   //           },
   //           pieSliceText: "none",
   //        };

   //        var chart = new google.visualization.PieChart(
   //           document.getElementById("donutchart")
   //        );
   //        chart.draw(data, options);
   //     }
   //  },
   useEffect(() => {});
   const data = {
      labels: ["Crowdsale investors", "Foundation"],
      datasets: [
         {
            label: "My Doughnut Chart",
            data: [80, 20], // Data values for each category
            backgroundColor: ["#0082FF", "#FAA002"], // Background colors for each dataset
            hoverBackgroundColor: ["#0082FF", "#FAA002"], // Hover background colors
            borderColor: "white", // Border color
            borderWidth: 1, // Border width
         },
      ],
   };

   const options = {
      // Optional chart configuration options
      responsive: true, // Makes the chart responsive
      maintainAspectRatio: false, // Disables aspect ratio preservation
   };

   return (
      <div className='w-full bg-[#ffff] lg:p-8 p-6 rounded-lg mt-6 '>
         <h1 className='font-semibold text-2xl'>Tokenomics</h1>
         <h1 className='font-semibold text-xl mt-5'>Initial Distribution</h1>
         <div className='w-full flex items-center'>
            <div className='w-[30%] h-[200px] mt-5'>
               <Doughnut data={data} />
            </div>
            <div className='flex flex-col gap-5'>
               <div className='flex items-center gap-2'>
                  <p className='w-3 h-3 rounded-full bg-[#0082FF]'></p>
                  Crowdsale Investor: 80%
               </div>
               <div className='flex items-center gap-2'>
                  <p className='w-3 h-3 rounded-full bg-[#FAA002]'></p>
                  Foundation: 20%
               </div>
            </div>
         </div>
         <p className='font-medium text-sm mt-4'>
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
         </p>
      </div>
   );
}
