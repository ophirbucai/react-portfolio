import { createContext } from "react";
import { myPlaylist } from "../../lib/constants";
import { TMyPlaylistContext } from "./myPlaylist.context.type.ts";

export const MyPlaylistContextDefaultValue: TMyPlaylistContext = {
  playlist: myPlaylist,
  setPlaylist: () => { },
  currentSong: 0,
  setCurrentSong: () => { },
  ref: { current: null },
  isPlaying: true,
  setIsPlaying: () => { },
}
export const MyPlaylistContext = createContext<TMyPlaylistContext>(MyPlaylistContextDefaultValue);
