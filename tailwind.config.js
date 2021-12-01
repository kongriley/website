const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Libre Baskerville", ...defaultTheme.fontFamily.serif]
      }
    }
    
  },

  plugins: [
    require("@tailwindcss/ui"),
  ]
}