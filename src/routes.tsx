import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/home'
import Pay from './pages/unlock'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/Lesliebruna89' element={<Login/>}/>
            <Route path='/Lesliebruna89/pay' element={<Pay/>}/>
        </Routes>
    </BrowserRouter>
  )
}