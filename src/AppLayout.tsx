import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import cn from './assets/utils/cn.ts'
import { Copyright } from './components'

const DefaultNav = React.lazy(() => import('./components/DefaultNav'))

const AppLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className='app-layout'>
            {children ? children : (
                <>
                    <AppLayout.Nav />
                    <AppLayout.Main />
                </>
            )}
            <footer className='footer'>
                <Copyright />
            </footer>
        </div>
    )
}

const Nav = ({ children }: React.PropsWithChildren) => {
    return (
        <nav>
            {children ? children : <Suspense><DefaultNav /></Suspense>}
        </nav>
    )
}

const Main = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => {
    return (
        <main className={['content', className].filter(Boolean).join(' ')}>
        <main className={cn('content', className)}>
            {children ? children : <Outlet />}
        </main>
    )
}

Nav.displayName = 'AppLayout.Nav'

Main.displayName = 'AppLayout.Main'

AppLayout.Nav = Nav

AppLayout.Main = Main

export default AppLayout
