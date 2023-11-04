import React from "react";
import { NavButton } from "../NavButton/NavButton.tsx";
import type Props from "./Navigation.props.ts";
import Stack from "@mui/material/Stack";

export const Navigation: React.FC<Props> = ({ items }) => {
  return (
    <nav>
      <Stack direction="row">
        {items.map((props, i) => <li key={`nav_${i}`}><NavButton {...props} /></li>, [])}
      </Stack>
    </nav>
  )
}
