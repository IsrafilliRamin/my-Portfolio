/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ramin:"#282828"
      },
      clipPath:{
        mainPath:'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);',
        clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);'
      },
      screens: {
        'o':'279',
        'mini':'360',
        'phone': '410px',
        
        // => @media (min-width: 640px) { ... }
  
        
 
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
