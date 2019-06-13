const withCSS = require('@zeit/next-css')

// const config = process.env.NODE_ENV === 'production' ? { target: 'serverless' } : {}

const config = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/thinc-www' : '',
    exportPathMap: function() {
        return {
            '/': { page: '/' }
        }
    }
}

module.exports = withCSS(config)
