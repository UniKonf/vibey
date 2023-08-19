function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-content': withOpacity('--base-content'),
        primary: withOpacity('--primary'),
        'primary-focus': withOpacity('--primary-focus'),
        'primary-accent': withOpacity('--primary-accent'),
        'base-100': withOpacity('--base-100'),
        'base-200': withOpacity('--base-200'),
        'base-300': withOpacity('--base-300'),
        'color-purple': withOpacity('--color-purple'),
        'color-pink': withOpacity('--color-pink'),
        foreground: withOpacity('--foreground'),
        background: withOpacity('--background'),
      },
      gridTemplateColumns: {
        'auto-sm': 'repeat(auto-fill, minmax(350px, 1fr))',
      },
      scale: {
        menu: '120',
      },
      translate: {
        500: '40rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
