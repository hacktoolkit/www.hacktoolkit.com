// next.config.js

module.exports = {
    images: {
        loader: null,
        domains: [],
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
            '/docs': { page: '/docs' },
            '/docs/getting-started': { page: '/docs/getting-started' },
            '/docs/modules': { page: '/docs/modules' },
            '/docs/api': { page: '/docs/api' },
        };
    },
};
