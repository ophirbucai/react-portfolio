import { useRef, useState } from 'react'
import Card from '@mui/material/Card'
import { myPlaylist } from '../../lib/constants'
import {
    MyPlaylistContext,
    MyPlaylistContextDefaultValue as defaultValue
} from '../../context/myPlaylist/myPlaylist.context'
import { YTPlayerMedia } from './YTPlayerMedia/YTPlayerMedia.tsx'
import { YTPlayerControls } from './YTPlayerControls/YTPlayerControls'
import { YTPlayerInfo } from './YTPlayerInfo/YTPlayerInfo'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'

export const YTPlayer = () => {
    const [playlist, setPlaylist] = useState(myPlaylist)
    const [currentSong, setCurrentSong] = useState<number>(defaultValue.currentSong)
    const [isPlaying, setIsPlaying] = useState<boolean>(defaultValue.isPlaying)
    const ref = useRef<HTMLIFrameElement>(null)

    return (
        <Card sx={{ marginX: 'auto', border: 'none', borderRadius: '12px', maxHeight: '80vh' }}>
            <MyPlaylistContext.Provider value={{
                playlist,
                setPlaylist,
                currentSong,
                setCurrentSong,
                isPlaying,
                setIsPlaying,
                ref
            }}>
                <CardContent sx={{ pb: 0, px: 0 }}>
                    <YTPlayerInfo/>
                    <Stack alignItems='center'>
                        <YTPlayerControls/>
                    </Stack>
                </CardContent>
                <CardMedia>
                    <YTPlayerMedia/>
                </CardMedia>
            </MyPlaylistContext.Provider>
        </Card>
    )
}
