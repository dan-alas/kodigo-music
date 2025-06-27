import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Podcast from '../pages/Podcast'
import LoginForm from '../pages/LoginForm'
import RegisterForm from '../pages/RegisterForm'


export default function AppRouter() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Podcast" element={<Podcast />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/RegisterForm" element={<RegisterForm/>} />
      
    </Routes>
  )
}
