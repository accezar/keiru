export type Templates = {
  name: string;
  repo: string;
};

export type Frameworks = {
  [key: string]: {
    templates: Templates[];
    owner: string;
  };
};

export const framworksData: Frameworks = {
  React: {
    templates: [
      { name: 'SPA', repo: 'template-react-spa-typescript' },
      { name: 'Next.js', repo: 'template-react-nextjs' },
    ],
    owner: 'madeiramadeirabr',
  },
  Vue: {
    templates: [{ name: 'SPA', repo: 'template-vue-spa-javascript' }],
    owner: 'madeiramadeirabr',
  },
};
