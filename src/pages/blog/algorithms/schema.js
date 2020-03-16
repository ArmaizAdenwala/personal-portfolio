export default {
  '@context': 'http://schema.org',
  '@type': 'WebPage',
  '@id': 'https://armaizadenwala.com/blog/algorithms/',
  description:
    'A growing list of detailed explanations of algorithms and concepts in an array of languages.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': 'https://armaizadenwala.com',
          name: 'Home',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': 'https://armaizadenwala.com/blog/',
          name: 'Blog',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@id': 'https://armaizadenwala.com/blog/algorithms/',
          name: 'Algorithms',
        },
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Armaiz Adenwala',
    logo: {
      '@type': 'imageObject',
      url: 'https://armaizadenwala.com/armaiz-developer-full.png',
    },
  },
  url: 'https://armaizadenwala.com/blog/algorithms/',
};
