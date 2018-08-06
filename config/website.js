const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Zack Franklin - Founder of AMZKungfu Inc ', // Navigation and Site Title
  siteTitleAlt: 'Zack Franklin', // Alternative Site title for SEO
  siteUrl: 'https://zack-franklin.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Personal Home Page for Zack Franklin',

  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: '@', // Twitter Username
  ogSiteName: 'Zack Franklin', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
