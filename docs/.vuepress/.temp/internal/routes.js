export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/GPTstory/1.html", { loader: () => import(/* webpackChunkName: "GPTstory_1.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/GPTstory/1.html.js"), meta: {"title":"你可以写一个关于\"兔兔兔兔热狗好吧吃几节课，我就计划计划赶不上变化\"的故事吗？字数1000字。"} }],
  ["/GPTstory/2.html", { loader: () => import(/* webpackChunkName: "GPTstory_2.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/GPTstory/2.html.js"), meta: {"title":"你可以写一个关于\"他回复二技能重新设置大哥\"的故事吗？字数1000字。"} }],
  ["/GPTstory/", { loader: () => import(/* webpackChunkName: "GPTstory_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/GPTstory/index.html.js"), meta: {"title":"记录一些GPT小故事"} }],
  ["/beta/", { loader: () => import(/* webpackChunkName: "beta_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/beta/index.html.js"), meta: {"title":"2024-06-11T14:41_欧拉公式"} }],
  ["/tech/1.html", { loader: () => import(/* webpackChunkName: "tech_1.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/1.html.js"), meta: {"title":"原神伤害公式"} }],
  ["/tech/2.html", { loader: () => import(/* webpackChunkName: "tech_2.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/2.html.js"), meta: {"title":"Hyper-V虚拟交换机无法显示交换机列表"} }],
  ["/tech/3.html", { loader: () => import(/* webpackChunkName: "tech_3.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/3.html.js"), meta: {"title":"这里提供3种不同风格的博客站导航栏样式，包括基本样式、现代样式和极简样式。每种样式都将包含HTML和CSS代码。"} }],
  ["/tech/4.html", { loader: () => import(/* webpackChunkName: "tech_4.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/4.html.js"), meta: {"title":"在Windows中，可以通过多种方法修改文件的创建日期。以下是一些常见的方法："} }],
  ["/tech/5.html", { loader: () => import(/* webpackChunkName: "tech_5.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/5.html.js"), meta: {"title":"爬取Bing每日背景图"} }],
  ["/tech/6.html", { loader: () => import(/* webpackChunkName: "tech_6.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/6.html.js"), meta: {"title":"仿制哔哩哔哩站点样式"} }],
  ["/tech/7.html", { loader: () => import(/* webpackChunkName: "tech_7.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/7.html.js"), meta: {"title":"嵌套虚拟化"} }],
  ["/tech/8.html", { loader: () => import(/* webpackChunkName: "tech_8.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/8.html.js"), meta: {"title":"Vuepress自定义主题配置"} }],
  ["/tech/", { loader: () => import(/* webpackChunkName: "tech_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/tech/index.html.js"), meta: {"title":"专门用于存放技术文档"} }],
  ["/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/", { loader: () => import(/* webpackChunkName: "工程力学_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/工程力学/index.html.js"), meta: {"title":"来自工程力学教材"} }],
  ["/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E5%A4%8D%E4%B9%A0%E8%B5%84%E6%96%991.html", { loader: () => import(/* webpackChunkName: "工程力学_复习资料1.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/工程力学/复习资料1.html.js"), meta: {"title":"静力学基础"} }],
  ["/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E9%A2%98%E7%9B%AE1%E7%9A%84%E8%A7%A3%E7%AD%94.html", { loader: () => import(/* webpackChunkName: "工程力学_题目1的解答.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/工程力学/题目1的解答.html.js"), meta: {"title":"在 Github 上显示数学公式"} }],
  ["/%E5%B7%A5%E7%A8%8B%E5%8A%9B%E5%AD%A6/%E9%A2%98%E7%9B%AE%E8%A7%A3%E7%AD%942.html", { loader: () => import(/* webpackChunkName: "工程力学_题目解答2.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/工程力学/题目解答2.html.js"), meta: {"title":"弯矩图与剪力图"} }],
  ["/%E6%88%BF%E5%B1%8B%E5%BB%BA%E7%AD%91%E5%AD%A6/", { loader: () => import(/* webpackChunkName: "房屋建筑学_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/房屋建筑学/index.html.js"), meta: {"title":"存放房屋建筑学资料"} }],
  ["/%E6%88%BF%E5%B1%8B%E5%BB%BA%E7%AD%91%E5%AD%A6/%E5%A4%8D%E4%B9%A0%E8%B5%84%E6%96%99%2001.html", { loader: () => import(/* webpackChunkName: "房屋建筑学_复习资料 01.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/房屋建筑学/复习资料 01.html.js"), meta: {"title":"建筑三要素"} }],
  ["/%E7%AE%A1%E7%90%86%E5%AD%A6/", { loader: () => import(/* webpackChunkName: "管理学_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/管理学/index.html.js"), meta: {"title":"存放管理学复习资料"} }],
  ["/%E7%AE%A1%E7%90%86%E5%AD%A6/%E7%AC%AC%E4%B8%80%E7%AB%A0.html", { loader: () => import(/* webpackChunkName: "管理学_第一章.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/管理学/第一章.html.js"), meta: {"title":"第一章"} }],
  ["/%E7%BB%8F%E6%B5%8E%E5%AD%A6/", { loader: () => import(/* webpackChunkName: "经济学_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/经济学/index.html.js"), meta: {"title":"经济学复习资料"} }],
  ["/%E7%BB%8F%E6%B5%8E%E5%AD%A6/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E6%9C%9F%E6%9C%AB%E8%80%83-%E5%A4%8D%E4%B9%A01.html", { loader: () => import(/* webpackChunkName: "经济学_经济学期末考-复习1.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/经济学/经济学期末考-复习1.html.js"), meta: {"title":"①用支出运算GDP时的投资是什么"} }],
  ["/%E7%BB%8F%E6%B5%8E%E5%AD%A6/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E6%9C%9F%E6%9C%AB%E8%80%83-%E5%A4%8D%E4%B9%A02.html", { loader: () => import(/* webpackChunkName: "经济学_经济学期末考-复习2.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/经济学/经济学期末考-复习2.html.js"), meta: {"title":"1. GDP的四个组成部分是什么?"} }],
  ["/%E8%8B%B1%E8%AF%AD/", { loader: () => import(/* webpackChunkName: "英语_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/英语/index.html.js"), meta: {"title":"用于英语复习资料"} }],
  ["/%E8%8B%B1%E8%AF%AD/%E6%9C%9F%E6%9C%AB%E8%B5%84%E6%96%99%20.html", { loader: () => import(/* webpackChunkName: "英语_期末资料 .html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/英语/期末资料 .html.js"), meta: {"title":"2023-2024年第二学期《大学英语AII》期末复习范围"} }],
  ["/%E8%BF%91%E4%BB%A3%E5%8F%B2/", { loader: () => import(/* webpackChunkName: "近代史_index.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/近代史/index.html.js"), meta: {"title":"近代史复习资料"} }],
  ["/%E8%BF%91%E4%BB%A3%E5%8F%B2/%E6%9C%9F%E6%9C%AB%E8%B5%84%E6%96%99%20.html", { loader: () => import(/* webpackChunkName: "近代史_期末资料 .html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/近代史/期末资料 .html.js"), meta: {"title":"第八~十章 “现代史”专题训练"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/27493/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
