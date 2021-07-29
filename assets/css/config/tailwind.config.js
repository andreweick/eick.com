module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: require('./purge.config.js'),
  theme: {
    extend: {
      colors: require('./colors.config.js'),
      fontFamily: require('./fonts.config.js'),
      spacing: {
        '4m': '1em'
      },
      maxWidth: {
        'audioplayer': '500px'
      }
    }
  },
  variants: {
    display: ["group-hover", "hover", "responsive"]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-break')({
      widows: [1, 2, 3],
      orphans: [1, 2, 3],
      variants: [],
    }),
    require('tailwindcss-multi-column')({
      counts: [1, 2, 3, 4, 5, 6, 7],
      gaps: {
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
      },
      widths: {
        'sm': '120px',
        'md': '240px',
        'lg': '360px',
      },
      rules: {
        colors: {
          'red': 'red',
          'lime': 'lime',
          'blue': 'blue',
        },
        widths: {
          default: '1px',
          'sm': '2px',
          'md': '3px',
        },
      },
      variants: ['responsive'],
    }),
  ]
};
