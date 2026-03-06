/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F8F3B",
        darkGreen: "#0A5C2C",
        blackSecondary: "#111111",
      },
      fontFamily: {
        heading: ["Poppins", "Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-main': "linear-gradient(135deg, #0F8F3B 0%, #111111 100%)",
        'gradient-dark': "linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'zoom-in': 'zoomIn 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
