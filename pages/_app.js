import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
     <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
