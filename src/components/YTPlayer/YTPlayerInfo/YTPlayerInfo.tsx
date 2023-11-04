import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import useMyPlaylist from "../../../hooks/useMyPlaylist";

export const YTPlayerInfo = () => {
  const { playlist, currentSong } = useMyPlaylist();

  return (
    <Box sx={{ flex: "1 0 auto", textAlign: "center" }}>
      <Typography variant="h5">
        {playlist[currentSong].title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        {playlist[currentSong].artist}
      </Typography>
    </Box>
  )
}