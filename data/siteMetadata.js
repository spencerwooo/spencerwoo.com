// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Spencer's blog",
  author: 'Spencer Woo',
  headerTitle: 'Spencer Woo',
  description: '风雨正好，该去写点诗句。',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://spencerwoo.com',
  siteRepo: 'https://github.com/spencerwoo/spencerwoo.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'spencer.wushangbo@gmail.com',
  github: 'https://github.com/spencerwooo',
  twitter: 'https://twitter.com/realSpencerWoo',
  weibo: 'https://weibo.com/u/6265807914',
  rss: '/feed.xml',
  locale: 'en-US',
  // analytics: {
  //   // If you want to use an analytics provider you have to add it to the
  //   // content security policy in the `next.config.js` file.
  //   // supports plausible, simpleAnalytics, umami or googleAnalytics
  //   // plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
  //   // simpleAnalytics: false, // true or false
  //   // umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
  //   // posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
  //   googleAnalyticsId: process.env.NEXT_PUBLIC_GANALYTICS_ID, // e.g. UA-000000-2 or G-XXXXXXX
  // },
  // newsletter: {
  //   // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
  //   // Please add your .env file and modify it according to your selection
  //   provider: 'buttondown',
  // },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    // disqusConfig: {
    //   shortname: 'spencerwoo',
    // },
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'preferred_color_scheme',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
