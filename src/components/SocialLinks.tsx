import React from 'react'
import GithubIcon from '../assets/icons/github.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'

type Props = React.PropsWithChildren<{
    links?: React.HTMLProps<HTMLAnchorElement>[]
}>
export const SocialLinks = ({ links }: Props) => {
    return (
        <ul className='social'>
            <li>
                <a href='https://github.com/ophirbucai'><GithubIcon/></a>
            </li>
            <li>
                <a href='https://linkedin.com/in/ophirbucai'><LinkedinIcon/></a>
            </li>
            {
                links && links.length && links.map(({ children, ...props }, i) => (
                    children ? <li key={i}><a {...props}>{children}</a></li> : null
                ))
            }
        </ul>
    )
}
