export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"beta\",\"link\":\"/beta/\"},{\"text\":\"GPTstort\",\"link\":\"/GPTstory/\"},{\"text\":\"tech\",\"link\":\"/tech/\"},{\"text\":\"房屋建筑学\",\"link\":\"/房屋建筑学/\"},{\"text\":\"工程力学\",\"link\":\"/工程力学/\"},{\"text\":\"管理学\",\"link\":\"/管理学/\"},{\"text\":\"近代史\",\"link\":\"/近代史/\"},{\"text\":\"经济学\",\"link\":\"/经济学/\"},{\"text\":\"英语\",\"link\":\"/英语/\"}],\"sidebar\":{\"/beta/\":[{\"text\":\"beta\",\"collapsible\":true,\"children\":[\"/beta/\"]}],\"/GPTstory/\":[{\"text\":\"GPTstory\",\"collapsible\":true,\"children\":[\"1.md\",\"2.md\"]}],\"/tech/\":[{\"text\":\"tech\",\"collapsible\":true,\"children\":[\"1.md\",\"2.md\",\"3.md\",\"4.md\",\"5.md\",\"6.md\",\"7.md\",\"8.md\"]}],\"/工程力学/\":[{\"text\":\"工程力学\",\"collapsible\":true,\"children\":[\"复习资料1.md\",\"题目1的解答.md\",\"题目解答2.md\"]}],\"/房屋建筑学/\":[{\"text\":\"房屋建筑学\",\"collapsible\":true,\"children\":[\"复习资料 01.md\"]}],\"/管理学/\":[{\"text\":\"管理学\",\"collapsible\":true,\"children\":[\"第一章.md\"]}],\"/经济学/\":[{\"text\":\"经济学\",\"collapsible\":true,\"children\":[\"经济学期末考-复习1.md\",\"经济学期末考-复习2.md\"]}],\"/英语/\":[{\"text\":\"英语\",\"collapsible\":true,\"children\":[\"期末资料 .md\"]}],\"/近代史/\":[{\"text\":\"近代史\",\"collapsible\":true,\"children\":[\"期末资料 .md\"]}]},\"logo\":\"/img/logo1251.jpg\",\"search\":true,\"searchMaxSuggestions\":10,\"colorMode\":\"light\",\"colorModeSwitch\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
