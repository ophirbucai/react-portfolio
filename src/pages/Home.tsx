import { Button } from '@mui/material'
import useTypewriter from '../hooks/useTypewriter.tsx'

const Home = () => {
    const { word } = useTypewriter(['digital web experiences ', 'engaging websites'], 75)
    return (
        <div className='landing'>
            <hgroup className='landing__title'>
                <h2>Building</h2>
                <h1>{word}</h1>
            </hgroup>
            <section>
                <h3 className='landing__subtitle'>Who is this website
                    for?</h3>{/*<p>Making websites pop out and look amazing takes careful consideration, it can only be built bit by bit.</p>*/}
                <p>No good job gets done if you don't learn from what you did before that worked, and what you did that
                    didn't work.</p>
                <p>As it turns out, I like to develop websites that not only look amazing, but be as flawless as can be,
                    on every device.</p>
                <Button className='landing__button' variant='contained' size='small'>my project</Button>
            </section>
            <section>
                <h3 className='landing__subtitle'>Scroll to learn more about
                    me</h3>{/*<p>Making websites pop out and look amazing takes careful consideration, it can only be built bit by bit.</p>*/}
                <p>Making a vertical website isn't an easy task. But I took the challenging route, it's not always the
                    best option.</p>
                <p>Sometimes you got to take the blue pill -- but eventually, you will want to work through the caveats
                    to be a real pro.</p>
                <p>It takes patience, persistence and burning the midnight oil becomes a habit.</p>
            </section>
        </div>
    )
}

export default Home
