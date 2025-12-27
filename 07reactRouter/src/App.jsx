import { useState } from 'react'
import {Outlet} from "react-router-dom"
import {Header,Footer} from "./components"
import "./App.css"

function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
     
    </>
  )
}

export default App
