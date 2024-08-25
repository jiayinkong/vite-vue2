const COMPONENT_SIDEBAR = require('./constants/sidebar/components');

module.exports = {
  title: '组件库文档',
  description: '',
  themeConfig: {
    logo: '',
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '源码',
        link: '',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '快速上手',   // 必要的
          path: '/guide/',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          // children: ['index.md']
        },
        {
          title: '组件',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 0,    // 可选的, 默认值是 1
          children: COMPONENT_SIDEBAR,
          // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        }
      ]
    }
  },
}