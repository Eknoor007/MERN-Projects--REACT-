import React from 'react'
import Dashboard from './Pages/Dashboard'
import NavBar from './Pages/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import Contact from './Pages/Contact'
import MyProjects from './Pages/MyProjects'
import Blog from './Pages/Blog'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/MyProjects" element={<MyProjects />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}