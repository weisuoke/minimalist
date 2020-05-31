module.exports = {
  dest: 'dist',
  title: '极简主义的生活方式',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    search: false,
    lastUpdated: '更新时间',
    nav: [],
    sidebar: [
      {
        title: '极简衣橱',
        path: '/cloth/',
        collapsable: true,
        sidebarDepth: 1,
        children: []
      },
      {
        title: '行动指南',
        path: '/action/',
        collapsable: true,
        sidebarDepth: 1,
        children: []
      }
    ]
  }
}
