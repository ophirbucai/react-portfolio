import React from "react";
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import useTheme from "@mui/material/styles/useTheme";
import useMyPlaylist from "../../../hooks/useMyPlaylist.tsx";

export const YTPlayerControls = () => {
  const theme = useTheme();
  const { ref, isPlaying, setIsPlaying } = useMyPlaylist();
  function playPauseVideo() {
    if (ref.current?.contentWindow) {
      const message = JSON.stringify({ event: 'command', func: isPlaying ? 'pauseVideo' : 'playVideo' });
      ref.current.contentWindow.postMessage(message, "https://www.youtube.com");
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="previous">
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label="play/pause" onClick={() => playPauseVideo()}>
          {isPlaying ? <PauseIcon sx={{ height: 38, width: 38 }} /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
        </IconButton>
        <IconButton aria-label="next">
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
        {/*<YTPlayerPlaylist />*/}
      </Box>
    </React.Fragment>
  )
}
