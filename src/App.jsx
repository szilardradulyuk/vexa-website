import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PricingPage from './pages/PricingPage.jsx'
import BookPage from './pages/BookPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  )
}
