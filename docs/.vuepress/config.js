const routes = [
  "HOME"
];

const createSidebar = () => {
  const sidebar = {};
  for (const route of routes) {
    Object.assign(sidebar, require("../" + route));
  }
  return sidebar;
};

module.exports = {
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-6192551181326997",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ],
  title: "DO IT Right now",
  description: "",
  "google-site-verification": "J993cuJJ-yFppfJKY8rMx3SzsN-3ZMBEM4uY7Jj075A",
  themeConfig: {
    nav: [
      { text: "Tag", link: "/Tag/" },
      // { text: "개발일기", link: "/dev-report/" },
      {
        text: "Info",
        items: [
          // { text: "About", link: "/about/" },
          { text: "Github", link: "https://github.com/Kyounghwan01" },
          {
            text: "블로그 건의하기",
            link: "https://github.com/Kyounghwan01/blog/issues/20"
          }
        ]
      }
    ],
    sidebar: createSidebar(),
    lastUpdated: "최근변경일"
  },
  base: "/blog/",
  plugins: [
    // [
    //   "vuepress-plugin-google-adsense",
    //   {
    //     google_ad_client: "ca-pub-6192551181326997", // ca-pub-0000000000000000
    //     enable_page_level_ads: true
    //   }
    // ],
    // [
    //   "@vuepress/google-analytics",
    //   {
    //     ga: "UA-172169202-1" // UA-00000000-0
    //   }
    // ],
    ["@vuepress/back-to-top"],
    ["vuepress-plugin-code-copy"],
    ["sitemap", { hostname: "https://github.com/bajutae/blog/" }],
    ["@vuepress/last-updated"]
  ]
  // markdown: {
  //   lineNumbers: true
  // }
};