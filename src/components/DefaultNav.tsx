import React, { useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import navigation from '../lib/constants/navigation'
import { SocialLinks } from './SocialLinks'

const DefaultNav = () => {
    const headerNavigation = React.useMemo(() => {
        return navigation.items.map(({ label, path }) => ({ children: label, to: path }))
    }, [])
    const currentIndex = useRef<number>(0)
    const isNavigating = useRef<boolean>(false)
    const navigate = useNavigate()
    const location = useLocation()
    React.useEffect(() => {
        currentIndex.current = navigation.items.findIndex(({ path }) => (path === location.pathname))

    }, [location.pathname])

    React.useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            if (isNavigating.current) return
            const nextIndex = e.deltaY > 0 ? 1 : -1
            if ((nextIndex === -1 && currentIndex.current === 0) || (nextIndex === 1 && currentIndex.current + 1 === navigation.items.length)) return
            isNavigating.current = true
            console.log(nextIndex + currentIndex.current, currentIndex.current)
            navigate(headerNavigation[currentIndex.current + nextIndex].to)
            window.setTimeout(() => {
                isNavigating.current = false
            }, 300)
        }

        window.addEventListener('wheel', handleScroll, false)

        return () => {
            window.removeEventListener('wheel', handleScroll, false)
        }
    }, [])

    return (
        <>
            <ul className='menu'>
                {headerNavigation.map((props) => <li key={props.to}>
                    <NavLink className='effect' {...props} data-text={props.children} />
                </li>)}
            </ul>
            <SocialLinks />
        </>
    )
}

export default DefaultNav
