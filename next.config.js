// next.config.js


module.exports = {
    images: {
      domains: ['https://avatars.githubusercontent.com/'],
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
          '/community': { page: '/community' },
          '/contact': { page: '/contact' },
          '/projects': { page: '/projects' },
        }
      },
  }
