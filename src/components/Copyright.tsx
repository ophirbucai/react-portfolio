import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Copyright = () => (
  <Typography variant='body2' color='text.secondary' align='center'>
    {'Copyright © '}
    <Link color='inherit' href='https://github.com/ophirbucai'>
      Ophir Bucai
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);