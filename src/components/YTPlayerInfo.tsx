// import Box from '@mui/system/Box'
// import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import useMyPlaylist from '../hooks/useMyPlaylist.tsx'

export const YTPlayerInfo = () => {
    const [videoInfo, setVideoInfo] = useState(null)
    const { playerReady, ref } = useMyPlaylist()

    useEffect(() => {
        if (!playerReady) return;
        const info = ref.current?.getCurrentTime()
        // const info = ref.current?.getPlaylist()
        console.log(info)
        console.log(videoInfo)

        setVideoInfo(null)
    }, [playerReady])



    return (
        <></>
        // <Box sx={{ flex: '1 0 auto', textAlign: 'center' }}>
        //     <Typography variant='h5' sx={{ fontSize: '1rem', fontWeight: 600 }}>
        //         {playlist[currentSong].title}
        //     </Typography>
        //     <Typography variant='subtitle1' color='text.secondary' component='div'>
        //         {playlist[currentSong].artist}
        //     </Typography>
        // </Box>
    )
}
