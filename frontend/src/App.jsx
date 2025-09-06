import { useState } from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"

import ChessBoard from './components/chessBoard.jsx'

import './App.css'

function App() {


  return ( 
<BrowserRouter>

<Routes>

<Route path="/" element={<ChessBoard/>}/>






</Routes>



</BrowserRouter>

   )
}

export default App
