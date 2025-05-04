import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Fact from './components/Fact'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/:factId" element={<Fact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
