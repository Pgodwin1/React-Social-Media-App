import Register from './component/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './component/Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
