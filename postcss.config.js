// const purge = require('@fullhuman/postcss-purgecss')({
//   // Specify the paths to all of the template files in your project
//   content: ['./src/pages/**/*.{jsx,tsx}', './src/components/*.{jsx,tsx}', './src/components/**/*.{jsx,tsx}'],

//   // Include any special characters you're using in this regular expression
//   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
// })

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    // ,...(process.env.NODE_ENV === 'production' ? [purge] : [])
    'cssnano',
  ],
}
