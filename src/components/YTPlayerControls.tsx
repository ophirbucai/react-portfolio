import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import {
    faForward,
    faBackward
} from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import useMyPlaylist from '../hooks/useMyPlaylist.tsx'

export const YTPlayerControls = () => {
    /* TODO: Fix volume change 
    function onSetVolume(value: number) {
        value = value < 0 ? 0 : value > 100 ? 100 : value
        setVolume(value)
        ref.current?.setVolume(value)
    }
    const [volume, setVolume] = useState(15)
    */
    const { ref, playerReady } = useMyPlaylist()

    function onNextClick() {
        ref.current?.nextVideo()
    }

    function onPrevClick() {
        ref.current?.previousVideo()
    }

    if (!playerReady) return null
    return (
        <Grid container sx={{ textAlign: 'center', px: 1, py: 0, mt: -.5 }}>
            {/* TODO: Make event emitter work consistently
            <Grid item xs={4}>
                <form onSubmit={(e: any) => {
                     e.preventDefault()
                     console.log('initiating', e.target[0].value)
                     // @ts-ignore
                     if (typeof ref.current?.[e.target[0].value] === 'function') {
                         // @ts-ignore
                         console.log(ref.current[e.target[0].value]())
                     }
                 }}>
                    <Autocomplete
                        size='small'
                        renderInput={(params) => <TextField {...params} label='Emit an event'/>}
                        options={[{
                            label: 'startVideo',
                            value: 'startVideo'
                        }]}
                    />
                </form> 
            </Grid>*/}
            <Grid item xs={true} sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
                <IconButton size='small' aria-label='previous' onClick={onPrevClick}>
                    <FaIcon icon={faBackward} size='xs' />
                </IconButton>
                {/*TODO: Make Play/pause work consistently
                    const isPlaying = playerState === YT.PlayerState.PLAYING
                    function onPausePlay() {
                        isPlaying ? ref.current?.pauseVideo() : ref.current?.playVideo()
                    <IconButton size='large' aria-label='play/pause' onClick={onPausePlay}>{isPlaying ? <FaIcon icon={faPause}/> : <FaIcon icon={faPlay}/>}</IconButton>*/}
                <IconButton size='small' aria-label='next' onClick={onNextClick}>
                    <FaIcon icon={faForward} size='xs' />
                </IconButton>
            </Grid> 
            {/* TODO: Fix volume on mobile
            <Grid xs={true} item sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton size='small' onClick={() => onSetVolume(volume - 15)}>
                    <FaIcon icon={volume === 0 ? faVolumeMute : faVolumeDown} />
                </IconButton>
                <Slider
                    value={volume}
                    onChange={(_e, value) => onSetVolume(+value)}
                    size='small'
                    min={0}
                    max={100} 
                />
                <IconButton size='small' onClick={() => onSetVolume(volume + 15)}>
                    <FaIcon icon={faVolumeUp} />
                </IconButton>
            </Grid>*/}
        </Grid>
    )
}
