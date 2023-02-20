/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    extend: {
      colors: {
        therapyDarkGreen: "#325343",
        therapyLightGreen: "#9BD58B",
        therapyLightYellow: "#DFF5AB",
        therapistCardzzBackground: '#F4F5F8',
       therapybtn: ' #438766',
        display: ["group-hover"],
      },
      variants: {
        extend: {
          backgroundColor: ['active'],
        }
      },
      fontSize: {
        'dashboardfontxs': '.52rem',
        'dashboardfonttinyxs': '.3rem'
        
       },
       width: {
         'dashboardsidebar': '15%',
        'dashboardsmwidth': '5%'
        
      },
      screens: {
       
        
        'dashboardtinys': {'max': '525px'},
        
        'dashboardxsm': {'max': '700px'},
       
        'dashboardmd': {'max': '880px'},
               
        'dashboardsm': {'max': '711px'},
        'profilemdsize': {'max': '528px'},
        'profilesize': {'max': '472px'},
        
      },
    },
    
   
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "blue",
  },
};
