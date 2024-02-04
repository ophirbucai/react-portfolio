import { createContext, createRef } from 'react'
import { MyPlaylistContext } from '../assets/types/MyPlaylistContext.type.ts'
import { myPlaylist } from '../lib/constants'

export const myPlaylistDefaultValues: MyPlaylistContext = {
    playlist: myPlaylist,
    setPlaylist: () => {},
    currentSong: 0,
    setCurrentSong: () => 0,
    ref: createRef(),
    playerState: -1,
    setPlayerState: () => undefined,
    playerReady: false,
    setPlayerReady: () => undefined,
}
export const myPlaylistContext = createContext<MyPlaylistContext>(myPlaylistDefaultValues)
