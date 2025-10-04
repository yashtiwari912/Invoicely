import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import AllInvoices from './pages/AllInvoices'
import CreateInvoice from './pages/CreateInvoice'
import Profile from './pages/Profile'
import EditInvoice from './pages/EditInvoice'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="allinvoices" element={<AllInvoices />} />
          <Route path="new" element={<CreateInvoice />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit/:id" element={<EditInvoice />} />
        </Route>
      </Routes>
    </>
  )
}


export default App
