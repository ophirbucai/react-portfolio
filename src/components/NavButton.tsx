import React from 'react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import MuiButton from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button'
import { Link, LinkProps } from 'react-router-dom'

const LinkBehavior: ForwardRefExoticComponent<NavButtonProps & (RefAttributes<HTMLAnchorElement> | undefined)> = React.forwardRef((props, ref) => {
  return <Link ref={ref} {...props} />;
});
export const NavButton: React.FC<NavButtonProps> = (props) => <MuiButton component={LinkBehavior} {...props} />;

NavButton.defaultProps = {
  to: '/',
  variant: 'text',
  color: 'primary',
}



type NavButtonProps = LinkProps & Omit<ButtonProps, 'ref'>
export default NavButtonProps;
