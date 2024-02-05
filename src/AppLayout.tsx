import React, { Suspense, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import cn from './assets/utils/cn.ts'
import { Copyright } from './components'
import navigation from './lib/constants/navigation'

const DefaultNav = React.lazy(() => import('./components/DefaultNav'))

const AppLayout = ({ children }: React.PropsWithChildren) => {
    const navigate = useNavigate()

    if (!children && import.meta.env.PROD) {
        navigate(navigation.paths.CONSTRUCTION, { replace: true })
    }

    useEffect(() => {
        if (!children) document.body.setAttribute('disable-scroll-y', '')
        return () => document.body.removeAttribute('disabled-scroll-y')
    }, [])

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
