import { defineClientConfig } from 'vuepress/client'
import MyLibUI from '@my-lib-ui/components'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(MyLibUI); // 以插件的形式，全局安装使用
  },
  setup() {},
  rootComponents: [],
})