import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Crud App/Home'
import Create from './Crud App/Create'
import Update from './Crud App/Update'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  )

}
export default App