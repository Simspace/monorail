import React from "react";
import { ThemeProvider, CssBaseline, useTheme } from "@mui/material";
import { StyledEngineProvider } from "@monorail/components/StyledEngineProviderEmotion";

export default function FrameComponent({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Effects />
        <CssBaseline />
        {children}
      </StyledEngineProvider>
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
