/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgDesktop':"url('../assets/bg-sidebar-desktop.svg')"
      }
    },
    screens: {
      sm: '480px',
      md_1: '600px',
      md_2: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    colors: {
      //Primary
      'marineBlue':'hsl(213, 96%, 18%)',
      'purplishBlue':'hsl(242, 100%, 62%)',
      'pastelBlue':'hsl(228, 100%, 84%)',
      'lightBlue':'hsl(206, 94%, 87%)',
      'strawberryRed':'hsl(354, 84%, 57%)',

      //Neutral
      'coolGray':'hsl(231, 11%, 63%)',
      'lightGray':'hsl(229, 24%, 87%)',
      'magnolia':'hsl(217, 100%, 97%)',
      'alabaster':'hsl(231, 100%, 99%)',
      'neutralWhite':'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      Ubuntu: ['Ubuntu', 'sans-serif'],
    },
  },
  plugins: [],
}
