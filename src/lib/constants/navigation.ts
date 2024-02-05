enum Routes {
    ROOT = '/',
    ABOUT = '/about',
    CONNECT = '/connect',
    BLOG = '/blog',
    BLOG_POST = '/blog/:slug',
    PROJECTS = '/projects',
    PROJECT = '/projects/:slug',
    NOT_FOUND = '/404',
    CONSTRUCTION = '/construction'
}

const items = [
    { label: 'Home', path: Routes.ROOT },
    { label: 'About', path: Routes.ABOUT },
    { label: 'Connect', path: Routes.CONNECT },
    { label: 'Blog', path: Routes.BLOG },
    { label: 'Projects', path: Routes.PROJECTS }
]

export default {
    paths: Routes,
    items
}
