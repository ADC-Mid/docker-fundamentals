module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Curso de Docker ADC',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Material de apoyo para el curso',

  base: '/docker-fundamentals/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'og:image', content: 'https://imagesadc.s3.amazonaws.com/eventos/VueLaptop.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Basics',
        link: '/basics/',
      },
      {
        text: 'Dockerfile',
        link: '/dockerfile/',
      },
      {
        text: 'Docker Compose',
        link: '/docker-compose/',
      },
      {
        text: 'Volumenes',
        link: '/volumes/',
      },
      {
        text: 'Github',
        link: 'https://github.com/Ascodecodigo/docker-fundamentals'
      },
      {
        text: 'ADC',
        link: 'http://ascodecodigo.com/'
      }
    ],
    sidebar: {
      '/basics/': [
        {
          title: 'Docker basics',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/dockerfile/': [
        {
          title: 'Dockerfile',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/docker-compose/': [
        {
          title: 'Docker compose',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/volumes/': [
        {
          title: 'Volumenes',
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
