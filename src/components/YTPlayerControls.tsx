import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward,/* faPlay, faPause,*/ faVolumeDown, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { Slider, Grid, /*TextField, Autocomplete */} from '@mui/material'
import IconButton from '@mui/material/IconButton'
// import useTheme from '@mui/material/styles/useTheme'
import { useState } from 'react'
import useMyPlaylist from '../hooks/useMyPlaylist.tsx'

export const YTPlayerControls = () => {
    const [volume, setVolume] = useState(15)
    const { ref, playerReady } = useMyPlaylist()

    function onNextClick() {
        ref.current?.nextVideo()
    }

    function onPrevClick() {
        ref.current?.previousVideo()
    }

    function onEmitEvent(e: any) {
        e.preventDefault()
        console.log('initiating', e.target[0].value)
        // @ts-ignore
        if (typeof ref.current?.[e.target[0].value] === 'function') {
            // @ts-ignore
            console.log(ref.current[e.target[0].value]())
        }
    }


    /* TODO:
    const isPlaying = playerState === YT.PlayerState.PLAYING

    function onPausePlay() {
        isPlaying ? ref.current?.pauseVideo() : ref.current?.playVideo()
    }*/
    function onSetVolume(value: number) {
        setVolume(value)
        ref.current?.setVolume(value)
    }


    if (!playerReady) return null
    return (
        <Grid container sx={{ textAlign: 'center', px: 1 }}>
            <Grid item xs={4}>
                <form onSubmit={onEmitEvent}>
                    <Autocomplete
                        size='small'
                        renderInput={(params) => <TextField {...params} label='Emit an event'/>}
                        options={[{
                            label: 'startVideo',
                            value: 'startVideo'
                        }]}
                    />
                </form>
            </Grid>
            <Grid item xs={true} sx={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
                <IconButton size='small' aria-label='previous' onClick={onPrevClick}>
                    <FaIcon icon={faBackward}/>
                </IconButton>
                {/*TODO: */}
                {/*<IconButton*/}
                {/*    size='large'*/}
                {/*    aria-label='play/pause'*/}
                {/*    onClick={onPausePlay}>*/}
                {/*    {isPlaying ? <FaIcon icon={faPause}/> : <FaIcon icon={faPlay}/>}*/}
                {/*</IconButton>*/}
                <IconButton size='small' aria-label='next' onClick={onNextClick}>
                    <FaIcon icon={faForward}/>
                </IconButton>
            </Grid>
            <Grid xs={4} item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaIcon icon={volume === 0 ? faVolumeMute : faVolumeDown} onClick={() => onSetVolume(volume - 15)} />
                <Slider
                    value={volume}
                    onChange={(_e, value) => onSetVolume(+value)}
                    size='small'
                    min={0}
                    max={100}/>
                <FaIcon icon={faVolumeUp} onClick={() => onSetVolume(volume + 15)}/>
            </Grid>
            {/*TODO: */}
            {/*<YTPlayerPlaylist />*/}
        </Grid>
    )
}
