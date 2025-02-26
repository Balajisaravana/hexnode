// import { useState } from 'react'
import { createRouter } from "./Router"
import { RouterProvider } from "react-router-dom"
import { AppProvider } from './Provider'
// import './App.css'
const AppRouter = () => {
  const router = createRouter()
  return <RouterProvider router={router}/>
}
function App() {


  return (

    <AppProvider>
      <AppRouter/>
    </AppProvider>
  
     
      
    )
}

export default App
