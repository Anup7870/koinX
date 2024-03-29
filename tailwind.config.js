/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/lib/esm/**/*.js",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-linear": "linear-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
         },
      },
   },
   plugins: [require("flowbite/plugin")],
};
