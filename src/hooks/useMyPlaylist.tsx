import { useContext } from 'react'

import { MyPlaylistContext } from '../assets/types/MyPlaylistContext.type.ts'
import { myPlaylistContext } from '../context/myPlaylistContext.ts'

const useMyPlaylist = (): MyPlaylistContext => useContext(myPlaylistContext)
export default useMyPlaylist
