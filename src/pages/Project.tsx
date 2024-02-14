import { Button, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const beMyValentine = [
    { title: 'Will you be my valentine? 🌹', texts: ['Yes', 'Absolutely', 'No'] },
    { title: 'Are you sure you don\'t want to be my valentine?', texts: ['I was joking! Of course I do 🤗', 'I don\'t wanna'] },
    { title: 'Did I hear an inkling \"yes\" in your voice?', texts: ['You heard right 💘', 'What? No way...'] },
    { title: 'Are you <i>absolutely</i> sure?', texts: ['No', 'Actually, I think you are cute 😉', 'Yes'] }
]

function Project() {
    const navigate = useNavigate()
    const { slug } = useParams()
    const [current, setCurrent] = useState(0)
    const { title = 'Yay!', texts = [] } = beMyValentine?.[current] ?? {}

    useEffect(() => {
        if (slug !== 'valentine') {
            navigate('/construction')
        }
    }, [slug])

    const handleAnswerClick = (agreed: boolean) => (e: any) => {
        e.currentTarget.blur()
        setCurrent(prevAnswer => agreed ? -1 : beMyValentine.length - 1 === prevAnswer ? 0 : prevAnswer + 1)
    }

    return (
        <div className={`project ${slug}`}>
            {current === -1 ? (
                <>
                    <h1 className='crowd'>{title.split('').map((letter, index) =>
                        <span key={index}>{letter}</span>)}</h1>
                    <div className='valentine-gif'>
                        <img
                            alt='Hugging teddies'
                            src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3czcDdqNDVxZ3NmeDg2NGFqbWpxdHU4amQ2dG1sZmo5Ym55cHZ4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DEVcRlocpxZh2QvN4l/giphy.gif'
                        />
                    </div>
                    <div>
                        <Button onClick={() => setCurrent(0)}>Restart</Button>
                    </div>
                </>
            ) : (
                <>
                    <h1 dangerouslySetInnerHTML={{ __html: title }} />
                    <Box sx={{ flexDirection: { lg: 'row', xs: 'column' }}} className='texts'>
                        {texts.map((text, index, arr) => {
                                const isLast = arr.length === index + 1
                                const order = Math.floor(Math.random() * arr.length - 1)
                                const animationDelay = `${order * 100}ms, ${Math.floor(Math.random() * 1000)}ms`
                                return (
                                    <Button
                                        className='text'
                                        variant='outlined'
                                        size={isLast ? 'medium' : 'large'}
                                        sx={{ order }}
                                        style={{ animationDelay }}
                                        key={text}
                                        onClick={handleAnswerClick(!isLast)}
                                    >{text}</Button>
                                )
                            }
                        )}
                    </Box>
                </>
            )}
            {/*{image && <img alt={title} src={image} />}*/}
        </div>
    )
}

export default Project
