function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // skin: {
        'base-content': withOpacity('--base-content'),
        primary: withOpacity('--primary'),
        'primary-focus': withOpacity('--primary-focus'),
        'primary-accent': withOpacity('--primary-accent'),
        'base-100': withOpacity('--base-100'),
        'base-200': withOpacity('--base-200'),
        'base-300': withOpacity('--base-300'),
        // },
      },
    },
  },
  plugins: [],
};
