const withCSS = require('@zeit/next-css')

const config = process.env.NODE_ENV === 'production' ? { target: 'serverless' } : {}

module.exports = withCSS(config)
