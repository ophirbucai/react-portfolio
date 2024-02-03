import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import useMyPlaylist from '../../../hooks/useMyPlaylist'

export const YTPlayerPlaylist = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const { playlist, setCurrentSong } = useMyPlaylist()

    return (
        <Box>
            <IconButton onClick={handleClick}><MenuIcon/></IconButton>
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
