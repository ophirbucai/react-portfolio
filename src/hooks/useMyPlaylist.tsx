import { useContext } from 'react'
import { MyPlaylistContext } from '../context/myPlaylist/myPlaylist.context'
import type { TMyPlaylistContext } from '../context/myPlaylist/myPlaylist.context.type'

const useMyPlaylist = (): TMyPlaylistContext => useContext(MyPlaylistContext)
export default useMyPlaylist
