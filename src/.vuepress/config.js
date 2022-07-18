const { description } = require('../../package')

module.exports = {
  dest: 'docs',
  base: '/hermes-documentation/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Hermes Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  // description: 'Esta es una descripcion',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Delta urls',
        link: '/delta_urls/',
      },
      {
        text: 'Supplement',
        link: '/supplement/',
      },
      {
        text: 'Flowchart',
        link: '/flowchart/',
      },
      {
        text: 'Gully (System Log Aggregation)',
        link: '/gully/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Configuration guide',
          collapsable: false,
          children: [
            '',
            'steps',
          ]
        }
      ],
      '/delta_urls/': [
        {
          title: 'Information',
          collapsable: false,
          children: [
            '',            
          ]
        }
      ],
      '/supplement/': [
        {
          title: 'Information',
          collapsable: false,
          children: [
            '',            
          ]
        }
      ],
      '/flowchart/': [
        {
          title: 'Information',
          collapsable: false,
          children: [
            '',            
          ]
        }
      ],
      '/gully/': [
        {
          title: 'Information',
          collapsable: false,
          children: [
            '',            
          ]
        }
      ],
      // '/server/': [
      //   {
      //     title: 'Información',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'nodejs',
      //       'libraries',
      //       'estructure',
      //       'database',
      //     ]
      //   }
      // ],
      // '/documents/': [
      //   {
      //     title: 'Información',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'customer',
      //       'me'
      //     ]
      //   }
      // ],
      // '/deploy/': [
      //   {
      //     title: 'Información',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'deploy-client',
      //       'deploy-server'
      //     ]
      //   }
      // ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    // '@vuepress/medium-zoom',
  ]

  // plugins: ['vuepress-plugin-export']


  // plugins: [
  //   [
  //     'vuepress-plugin-medium-zoom',
      
  //   ],
  // ],
}
