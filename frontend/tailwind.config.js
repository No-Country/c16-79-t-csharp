/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],

  theme: {
    extend: {
      // gridTemplateColumns: {
      //   "2": "repeat(2, minmax(1, 8fr))"
      // }
    },
  },
  plugins: [require('flowbite/plugin')],
}
