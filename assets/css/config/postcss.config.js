class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('tailwindcss')('./assets/css/config/tailwind.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html', 'layout_modules/**/**/*.html' ],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }], 
      fontFace: true,
      whitelist: ["hr"]
    }),    
    require('autoprefixer')({
      grid: true,
      browsers: ['>1%']
    }),    
  ]
}