const withCSS = require('@zeit/next-css')

// const config = process.env.NODE_ENV === 'production' ? { target: 'serverless' } : {}

const config = {
  exportPathMap: function () {
    return {
      'src/': { page: '/' },
    }
  },
}

module.exports = withCSS(config)
