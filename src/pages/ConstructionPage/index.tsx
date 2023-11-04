import React from "react";
import { Container } from "@mui/material";
import { YTPlayer } from "../../components";

export const ConstructionPage: React.FC = () => {
  return (
    <Container>
      <h1>Under Construction</h1>
      <div>
        <p>In the meantime, I invite you to listen to a cool song from my playlist:</p>
        <YTPlayer />
      </div>
    </Container>
  )
}
