import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import useMyPlaylist from "../../../hooks/useMyPlaylist.tsx";
export const YTPlayerMedia = () => {
  const { playlist, currentSong, ref } = useMyPlaylist();

  return (
    <AspectRatio.Root ratio={16 / 9}>
      <iframe
        style={{ position: "absolute", bottom: "50%", left: "50%", transform: "translate(-50%, 50%)", width: "100%" }}
        ref={ref}
        id="ytplayer"
        allowFullScreen
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${playlist[currentSong].path}?autoplay=1&origin=${window.location.origin}&zoom=1&showinfo=0disablekb=1&enablejsapi=1&playerapiid=ytplayer&version=3&controls=0`}
        title={playlist[currentSong].title}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </AspectRatio.Root>
  )
}
