const path = require('path')

module.exports = {
  title: '🚝 Monorail',
  tagline: 'SimSpace Design System',
  url: 'https://design.simspace.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'SimSpace', // Usually your GitHub org/user name.
  projectName: 'Monorail', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Monorail',
      logo: {
        alt: 'Monorail Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/Simspace',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/simspacecorp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Simspace',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SimSpace Corporation. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'home',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            // TODO(docusaurus): Need to update it to dev after it's merged.
            'https://github.com/Simspace/portal-suite/tree/portal/gs/PS-9861-docusaurus/client/packages/monorail/docusaurus',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: [
            require.resolve(
              '../../portal-client/src/design-assets/src/sass/gotham.scss',
            ),
            require.resolve(
              '../../portal-client/src/design-assets/src/sass/main.scss',
            ),
            require.resolve('./src/css/custom.css'),
          ],
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    require.resolve('docusaurus-plugin-sass'),
    path.resolve(
      __dirname,
      'plugins',
      'my-cool-plugin-that-lets-me-add-aliases',
    ),
  ],
  stylesheets: ['https://fonts.googleapis.com/icon?family=Material+Icons'],
}
