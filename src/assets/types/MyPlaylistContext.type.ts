import type { Dispatch, MutableRefObject, SetStateAction } from 'react'
import type { TPlaylist, TSong } from '../../lib/types'

export type MyPlaylistContext = {
    playlist: TPlaylist;
    setPlaylist: (myPlaylist: TSong[]) => void;
    currentSong: number;
    setCurrentSong: Dispatch<SetStateAction<number>>;
    ref: MutableRefObject<HTMLIFrameElement & YT.Player | null>;
    playerState: YT.PlayerState;
    setPlayerState: Dispatch<SetStateAction<YT.PlayerState>>;
    playerReady: boolean;
    setPlayerReady: Dispatch<SetStateAction<boolean>>;
};
