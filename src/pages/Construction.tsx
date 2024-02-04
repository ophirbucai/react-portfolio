import React from 'react'
import { YTPlayer, Copyright, SocialLinks } from '../components'

const Construction: React.FC = () => {
    return (
        <div className='app-layout'>
            <nav>
                <ul>
                    <SocialLinks/>
                </ul>
            </nav>
            <main className='content construction'>
                <header>
                    <h1>Under Construction</h1>
                    <p>Hi! I'm <strong>Ophir</strong>, a Frontend Developer based in Israel :) .</p>
                    <p>I'm working on making a beautiful website to showcase my work.</p>
                </header>
                <section>
                    <h2>Contact me</h2>
                    <nav className='contact'>
                        <ul>
                            <li>You are welcome to shoot me a msg at <a className='effect' data-text='ophirbucai@gmail.com'
                                href='mailto:ophirbucai@gmail.com'>ophirbucai@gmail.com</a></li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <p>In the meantime, I invite you to listen to a cool song from my playlist:</p>
                    <YTPlayer/>
                </section>
            </main>
            <footer className='footer'>
                <Copyright/>
            </footer>
        </div>
    )
}

export default Construction
