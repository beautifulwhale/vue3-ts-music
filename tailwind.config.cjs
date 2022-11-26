/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `rgb(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

// const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      //like `bg-base` and `bg-primary`
      backgroundColor: {
        skin: {
          bg: withOpacity(' --color-base'),
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
          muted: withOpacity('--color-text-muted'),
        }
      },
      //like `text-base` and `text-primary`
      textColor: {
        skin: {
          primary: withOpacity('--color-text-base'),
          icon: withOpacity(' --color-icon-base'),
          menuhover: withOpacity('--color-menu-hover'),
          secondary: withOpacity('--color-secondary'),
        }
      },
    }
  },
  plugins: [],
}
