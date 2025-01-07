/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",  // Define the custom background size
      },

      fontFamily : {
        Lora: "Lora",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

