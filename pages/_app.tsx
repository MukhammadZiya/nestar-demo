import { light } from "@/scss/MaterialTheme";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore

  const [theme, setTheme] = useState(createTheme(light));

  //Socket.io, redux, mui

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
