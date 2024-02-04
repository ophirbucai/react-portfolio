import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import useMyPlaylist from '../hooks/useMyPlaylist.tsx'

export const YTPlayerPlaylist = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const { playlist, setCurrentSong } = useMyPlaylist()

    return (
        <Box>
            <IconButton onClick={handleClick}><FontAwesomeIcon icon={faBars} /></IconButton>
            <Menu open={open} onClose={handleClose}>
                {playlist.map((song, index) => (
                    <MenuItem key={song.path} onClick={() => {
                        setCurrentSong(index)
                        handleClose()
                    }}>
                        <Typography>{song.title} - {song.artist}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}
