import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: 'en-US',

  alias: {
    '@assets': path.resolve(__dirname, '../src/assets'),
    '@components': path.resolve(process.cwd(), 'node_modules/@my-lib-ui/components'),
  },

  title: 'MyLibUI',
  description: '组件库文档',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    

    navbar: [
      {
        text: '快速上手',
        link: '/',
      },
      {
        text: '组件',
        link: '/pages/Button/',
      }
    ],
    sidebar: {
      '/pages/': [
        {
          text: 'Button',
          link: '/pages/Button/',
        },
        '/pages/Icon/',
      ]
    }
  }),

  bundler: viteBundler(),
})
