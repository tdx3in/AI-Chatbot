// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are two ways to define a Docusaurus config as a function or object.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sprinklr AI Docs',
  tagline: 'Sprinklr AI help documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tdx3in.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AI-Chatbot/',
  trailingSlash: true,
  // GitHub pages deployment config.
  organizationName: 'tdx3in',
  projectName: 'AI-Chatbot',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/tdx3in/AI-Chatbot/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      navbar: {
        title: 'Sprinklr AI Docs',
        logo: {
          alt: 'Sprinklr AI Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/tdx3in/AI-Chatbot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Workforce Management',
                to: '/docs/Workforce_Management_Overview__Sprinklr_Help_Center',
              },
              {
                label: 'Manage Shifts',
                to: '/docs/Manage_Shifts_in_Sprinklr_WFM__Sprinklr_Help_Center',
              },
              {
                label: 'Manage Activities',
                to: '/docs/Manage_Activities_in_Sprinklr_WFM__Sprinklr_Help_Center',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/tdx3in/AI-Chatbot/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sprinklr AI Documentation. All rights reserved.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
