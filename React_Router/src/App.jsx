import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import {Header, Footer} from "./components"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer />
    </>
  )
}

export default App;