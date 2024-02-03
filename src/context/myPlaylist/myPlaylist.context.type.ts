import { TPlaylist, TSong } from '../../lib/types'

export type TMyPlaylistContext = {
    playlist: TPlaylist;
    setPlaylist: (myPlaylist: TSong[]) => void;
    currentSong: number;
    setCurrentSong: (currentSong: number) => void;
    ref: { current: HTMLIFrameElement | null };
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
};
