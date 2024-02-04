import Card from '@mui/material/Card'
import { useRef, useState } from 'react'
import { myPlaylist } from '../lib/constants'
import {
    myPlaylistContext,
    myPlaylistDefaultValues as defaultValue
} from '../context/myPlaylistContext.ts'
import { YTPlayerMedia } from './YTPlayerMedia.tsx'
import { YTPlayerControls } from './YTPlayerControls.tsx'
import { YTPlayerInfo } from './YTPlayerInfo.tsx'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export const YTPlayer = () => {
    const [playlist, setPlaylist] = useState(myPlaylist)
    const [currentSong, setCurrentSong] = useState(defaultValue.currentSong)
    const [playerState, setPlayerState] = useState(defaultValue.playerState)
    const [playerReady, setPlayerReady] = useState(defaultValue.playerReady)
    const ref = useRef(null)

    return (
        <Card sx={{ marginX: 'auto', borderRadius: '12px', maxWidth: '900px', mt: 2 }}>
            <myPlaylistContext.Provider value={{
                playlist,
                setPlaylist,
                currentSong,
                setCurrentSong,
                playerState,
                setPlayerState,
                ref,
                playerReady,
                setPlayerReady
            }}>
                {playerReady && (
                    <CardContent sx={{ px: 2, pb: 1 }}>
                        <YTPlayerInfo/>
                        <YTPlayerControls/>
                    </CardContent>)}
                <CardMedia>
                    <YTPlayerMedia/>
                </CardMedia>
            </myPlaylistContext.Provider>
        </Card>
    )
}
