// const config = process.env.NODE_ENV === 'production' ? { target: 'serverless' } : {}

const config = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = config
