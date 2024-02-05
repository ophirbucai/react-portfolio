import React, { Suspense } from 'react'
import { Copyright } from './components'

const DefaultNav = React.lazy(() => import('./components/DefaultNav'))

const AppLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className='app-layout'>
            {children ? children : (
                <>
                    <AppLayout.Nav />
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

Nav.displayName = 'AppLayout.Nav'

AppLayout.Nav = Nav

export default AppLayout
