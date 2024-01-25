import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from 'react'
import {Header, Footer} from "./components"
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const  [themeMode, setThemeMode] = useState("light")

  const darkMode = () => {
    setThemeMode("dark")
  }
  const lightMode = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-bs-theme', themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <Header/>
      <Outlet/>
      <Footer />
    </ThemeProvider>
  )
}

export default App;