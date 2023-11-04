import React from "react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import MuiButton from '@mui/material/Button';
import { Link } from "react-router-dom";
import NavButtonProps from "./NavButton.props.ts";

const LinkBehavior: ForwardRefExoticComponent<NavButtonProps & (RefAttributes<HTMLAnchorElement> | undefined)> = React.forwardRef((props, ref) => {
  return <Link ref={ref} {...props} />;
});
export const NavButton: React.FC<NavButtonProps> = (props) => <MuiButton component={LinkBehavior} {...props} />;

NavButton.defaultProps = {
  to: "/",
  variant: "text",
  color: "primary",
}