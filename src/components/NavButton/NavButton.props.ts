import { ButtonProps } from "@mui/material/Button";
import { LinkProps } from "react-router-dom";

type NavButtonProps = LinkProps & Omit<ButtonProps, "ref">;
export default NavButtonProps;