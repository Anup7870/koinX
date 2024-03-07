// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
   const container = useRef();

   useEffect(() => {
      const script = document.createElement("script");
      script.src =
         "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
         
         "height": "480",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
   }, []);

   return (
      <div
         className='tradingview-widget-container w-full mb-0 pb-0'
         ref={container}>
         <div className='tradingview-widget-container__widget'></div>
      </div>
   );
}

export default memo(TradingViewWidget);
