/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        large__mobile:"450px",
      },
      colors:{
        "primary-color":"#fff",
        "secondary-color":"#E6F86F",
        'tertiary-color':'#877FBE',
      },
      backgroundColor:{
        "primary-color":"#fff",
        "secondary-color":"#E6F86F",
        'tertiary-color':'#877FBE',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing:{
        'mobile-container':'20px',
        'container':'60px'
      }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ".heading-h1": {
          fontSize: '53px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '54.4px',
          '@media (min-width: 768px)': {
            fontSize: "124px",
            lineHeight:'118.4px',
          }
        },
        ".heading-h4": {
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '35px',
          letterSpacing:'1.613px',
          '@media (min-width: 768px)': {
            fontSize: "54px",
            lineHeight:"65px"
          }
        },
        ".heading-h5": {
          fontSize: '19px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '22px',
          '@media (min-width: 768px)': {
            fontSize: "24px",
            lineHeight:"44px"
          }
        },
        ".heading-h6": {
          fontSize: '17px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '22px',
          '@media (min-width: 768px)': {
            fontSize: "24px",
            lineHeight:"35px"
          }
        },
        '.primary-button':{
          width: '100%',
          padding: '15px',
          fontWeight: 500,
          fontSize: '13px',
          backgroundColor: '#E6F86F',
          borderRadius: '1920px',
          color: "#000",
          transition: '0.3s',
          '&:focus':{
            outline: 'none',
          },
          '&:hover':{
            opacity: 0.7,
          },
          '&:disabled':{
            backgroundColor: '#eee',
            cursor: 'not-allowed',
            color:'white',
            '&:hover':{
              backgroundColor: '#eee',
              color: 'white',
            }
          },
          '@media (min-width: 768px)': {
            fontSize: "18px",
            padding:"20px",
          }
        }
      })
    }
  ],
}
