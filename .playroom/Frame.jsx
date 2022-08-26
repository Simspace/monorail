import React from "react";
import { ThemeProvider, CssBaseline, useTheme } from "@mui/material";

export default function FrameComponent({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Effects />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

function Effects() {
  const theme = useTheme();
  React.useEffect(() => {
    document.documentElement.style.backgroundColor =
      theme.palette.background.paper;
    document.body.style.backgroundColor = theme.palette.background.paper;
  }, theme);
  return null;
}
