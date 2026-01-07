import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Password from './pages/Password'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/password' element={<Password/>}/>
      </Routes>
    </div>
  )
}

export default App
