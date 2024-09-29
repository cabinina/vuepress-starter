export const themeData = JSON.parse("{\"repo\":\"Unerge/vuepress-starter\",\"docsDir\":\"docs\",\"docsBranch\":\"docs\",\"editLinks\":true,\"editLinkText\":\"在 GitHub 上编辑此页\",\"navbar\":[{\"text\":\"beta\",\"link\":\"/beta/\"},{\"text\":\"GPTstort\",\"link\":\"/GPTstory/\"},{\"text\":\"tech\",\"link\":\"/tech/\"},{\"text\":\"Learn\",\"link\":\"/learn/\",\"children\":[\"/learn/\",\"/learn/工程力学/\",\"/learn/管理学/\",\"/learn/经济学/\",\"/learn/英语/\",\"/learn/近代史/\",\"/learn/毛概/\",\"/learn/房屋建筑学/\"]}],\"sidebar\":{\"/beta/\":[{\"text\":\"beta\",\"collapsible\":true,\"children\":[\"/beta/\"]}],\"/GPTstory/\":[{\"text\":\"GPTstory\",\"collapsible\":true,\"children\":[\"1.md\",\"2.md\"]}],\"/tech/\":[{\"text\":\"tech\",\"collapsible\":true,\"children\":[\"1.md\",\"2.md\",\"3.md\",\"4.md\",\"5.md\",\"6.md\",\"7.md\",\"8.md\",\"9.md\"]}],\"/learn/\":[{\"title\":\"Learn\",\"children\":[{\"text\":\"工程力学\",\"collapsible\":true,\"children\":[\"/learn/工程力学/复习资料1.md\",\"/learn/工程力学/题目1的解答.md\",\"/learn/工程力学/题目解答2.md\"]},{\"text\":\"管理学\",\"collapsible\":true,\"children\":[\"/learn/管理学/绪论.md\",\"/learn/管理学/第一章.md\",\"/learn/管理学/第二章.md\"]},{\"text\":\"经济学\",\"collapsible\":true,\"children\":[\"/learn/经济学/经济学期末考-复习1.md\",\"/learn/经济学/经济学期末考-复习2.md\"]},{\"text\":\"英语\",\"collapsible\":true,\"children\":[\"/learn/英语/期末资料 .md\"]},{\"text\":\"近代史\",\"collapsible\":true,\"children\":[\"/learn/近代史/期末资料 .md\"]},{\"text\":\"毛泽东概论\",\"collapsible\":true,\"children\":[\"/learn/毛概/导论.md\",\"/learn/毛概/第一章.md\",\"/learn/毛概/第二章.md\"]},{\"text\":\"房屋建筑学\",\"collapsible\":true,\"children\":[\"/learn/房屋建筑学/复习资料 01.md\"]}]}]},\"logo\":\"/img/logo1251.jpg\",\"search\":true,\"searchMaxSuggestions\":10,\"colorMode\":\"light\",\"colorModeSwitch\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
