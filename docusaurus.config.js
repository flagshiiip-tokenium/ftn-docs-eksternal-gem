// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flagshiiip Docs',
  tagline: 'Where Loyalty Becomes an Asset',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Ganti saat sudah tahu tempat hosting
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // Isi saat repo GitHub sudah ada
  organizationName: 'Chrollovisible',
  projectName: 'ftn-docs-eksternal-gem',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    localeConfigs: {
      id: { label: 'Indonesia', htmlLang: 'id-ID' },
      en: { label: 'English', htmlLang: 'en-US' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
      image: 'img/favicon-32x32.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Flagshiiip',
        logo: {
          alt: 'Flagshiiip Logo',
          src: 'img/logo.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokumentasi',
          },
          {
            to: '/docs/panduan-pengguna/install-aplikasi',
            label: 'Panduan Pengguna',
            position: 'left',
          },
          {
            to: '/docs/faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://flagshiiip.com',
            label: 'flagshiiip.com',
            position: 'right',
          },
          {
            href: 'https://flagshiiip.io',
            label: 'flagshiiip.io',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Bantuan',
            items: [
              {
                label: 'Mulai Cepat',
                to: '/docs/mulai-cepat',
              },
              {
                label: 'Panduan Scan QR',
                to: '/docs/panduan-pengguna/scan-qr',
              },
              {
                label: 'Klaim Hadiah Token',
                to: '/docs/panduan-pengguna/klaim-token',
              },
              {
                label: 'Ada Kendala?',
                to: '/docs/panduan-pengguna/pemecahan-masalah',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Kebijakan & Keamanan',
            items: [
              {
                label: 'Teknologi Blockchain',
                to: '/docs/teknologi/blockchain',
              },
              {
                label: 'Keamanan & Anti-Duplikasi',
                to: '/docs/teknologi/keamanan-dan-anti-duplikasi',
              },
              {
                label: 'Glosarium Istilah',
                to: '/docs/glosarium',
              },
            ],
          },
          {
            title: 'Ekosistem Flagshiiip',
            items: [
              {
                label: 'Solusi Pemilik Brand (flagshiiip.com)',
                href: 'https://flagshiiip.com',
              },
              {
                label: 'Ekosistem Token (flagshiiip.io)',
                href: 'https://flagshiiip.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flagshiiip & PT BMG Capital Technology. Hak cipta dilindungi.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;