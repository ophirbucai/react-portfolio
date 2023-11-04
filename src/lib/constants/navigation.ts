const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
  blog: '/blog',
  blogPost: '/blog/:slug',
  projects: '/projects',
  project: '/projects/:slug',
  notFound: '/404',
};

const items = [
  { label: 'Home', path: routes.home },
  { label: 'About', path: routes.about },
  { label: 'Contact', path: routes.contact },
  { label: 'Blog', path: routes.blog },
  { label: 'Projects', path: routes.projects },
];

export default {
  paths: routes,
  items,
}