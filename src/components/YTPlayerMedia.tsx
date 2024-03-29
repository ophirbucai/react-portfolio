import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { useEffect, useRef } from 'react'
import useMyPlaylist from '../hooks/useMyPlaylist.tsx'

export const YTPlayerMedia = () => {
    const { setPlayerReady, setPlayerState, ref } = useMyPlaylist()
    const playerId = useRef(crypto.randomUUID())

    const playerVars: YT.PlayerOptions['playerVars'] = {
        'list': 'RDEnNgASBdCeo',
        'disablekb': 0,
        'enablejsapi': 1,
        'autoplay': 1,
        'controls': 0,
        'iv_load_policy': 3,
        'origin': window.origin,
        'fs': 0
    }

    useEffect(() => {
        // TODO: Fix browser issue - interactivity with iframe, ref.current?.contentWindow?.document.body.click()
        const player: YT.Player = new YT.Player(playerId.current, {
            playerVars,
            events: {
                'onStateChange': ({ data }) => setPlayerState(data),
                'onReady': () => {
                    setPlayerReady(true)
                    ref.current = Object.assign(player, ref.current)
                    // ref.current?.loadVideoById(playlist[currentSong].path)
                    ref.current?.loadPlaylist("RDEnNgASBdCeo", Math.floor(Math.random() * 45), 0, 'highres'),
                    ref.current?.setVolume(15)
                },
                'onError': (err: any) => {
                    console.error(err)
                }
            }
        })

    }, [ref.current])

    const params = new URLSearchParams()
    for (let key in playerVars) params.append(key, playerVars[key as keyof YT.PlayerOptions['playerVars']])

    return (
        <>
            {/*<button onClick={() => console.log(ref.current?.getDuration())}>getDuration</button>*/}
            <AspectRatio.Root ratio={4 / 2.25} style={{ userSelect: 'none' }}>
                <iframe
                    style={{
                        position: 'absolute',
                        border: 'none',
                        top: '1px',
                        scale: 1.0025
                    }}
                    id={playerId.current}
                    width='100%'
                    height='100%'
                    frameBorder='0'
                    src={`${window.origin.includes('https') ? 'https' : 'http'}://www.youtube.com/embed?${params.toString()}`}
                    ref={ref}
                    allowFullScreen
                ></iframe>

            </AspectRatio.Root>
        </>
    )
}

