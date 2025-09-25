import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Routes to add - Features , Testimonials , Faq, and Footer */}
      </Routes>
    </>
  )
}


export default App
