import React, { useRef } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Copyright } from './components'
import navigation from './lib/constants/navigation'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

const AppLayout: React.FC = () => {
    const isNavigating = useRef<boolean>(false)
    const currentIndex = useRef<number>(0)
    const navigate = useNavigate()
    const location = useLocation()

    const headerNavigation = React.useMemo(() => {
        return navigation.items.map(({ label, path }) => ({ children: label, to: path }))
    }, [])

    const handleScroll = (e: WheelEvent) => {
        if (isNavigating.current) return
        const nextIndex = e.deltaY > 0 ? 1 : -1
        if ((nextIndex === -1 && currentIndex.current === 0) || (nextIndex === 1 && currentIndex.current + 1 === navigation.items.length)) return
        isNavigating.current = true
        console.log(nextIndex + currentIndex.current, currentIndex.current)
        navigate(headerNavigation[currentIndex.current + nextIndex].to)
        window.setTimeout(() =>  {
            isNavigating.current = false
        }, 300)
    }

    React.useEffect(() => {
        currentIndex.current = navigation.items.findIndex(({ path }) => (path === location.pathname))

    }, [location.pathname])


    React.useEffect(() => {
        window.addEventListener('wheel', handleScroll, false);

        return () => {
            window.removeEventListener('wheel', handleScroll, false);
        }
    }, [])

    return (
        <div className='app-layout'>
            <nav>
                <ul className='menu'>
                    {headerNavigation.map((props) => <li key={props.to}><NavLink className='effect' {...props} data-text={props.children} /></li>)}
                </ul>
                <ul className='social'>
                    <li>
                        <a href='https://github.com/ophirbucai'><GitHubLogoIcon /></a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/in/ophirbucai'><LinkedInLogoIcon /></a>
                    </li>
                </ul>
            </nav>
            <main className='content'>
                <Outlet />
            </main>
            <footer className='footer'>
                <Copyright />
            </footer>
        </div>
    )
}

export default AppLayout
