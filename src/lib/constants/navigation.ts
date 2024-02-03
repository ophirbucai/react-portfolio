const routes = {
    root: '/',
    about: '/about',
    connect: '/connect',
    blog: '/blog',
    blogPost: '/blog/:slug',
    projects: '/projects',
    project: '/projects/:slug',
    notFound: '/404'
}

const items = [
    { label: 'Home', path: routes.root },
    { label: 'About', path: routes.about },
    { label: 'Connect', path: routes.connect },
    { label: 'Blog', path: routes.blog },
    { label: 'Projects', path: routes.projects }
]

export default {
    paths: routes,
    items
}
