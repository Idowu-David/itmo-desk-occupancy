import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Password from './pages/Password'
import CreatePassword from './pages/CreatePassword'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/password' element={<Password />} />
        <Route path='/set-password' element={<CreatePassword />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
