module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        'light-bg': '#F7F5F2', // Light background color similar to the screenshot
        'dark-bg': '#1E3A5F',  // Dark navy blue background for dark mode
      },
    },
  },
  plugins: [],
};

