import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Routes to add - Features , Testimonials , Faq, and Footer */}
      </Routes>
    </>
  )
}


export default App
