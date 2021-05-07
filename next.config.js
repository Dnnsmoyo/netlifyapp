module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/bank': { page: '/bank' },
      '/marketing': { page: '/marketing' },
      '/p/marketing': { page: '/marketing', query: { title: 'hello-nextjs' } },
      '/p/bank': { page: '/bank', query: { title: 'learn-nextjs' } },
    }
  },
}
