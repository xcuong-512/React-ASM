import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import TVShows from './pages/TVShows/TVShows'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const NotFound = () => <div style={{ color: 'red', textAlign: 'center', margin: '60px 0', fontSize: '22px' }}>404 - Không tìm thấy trang</div>;

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate('/')
      } else {
        console.log("Logged Out");
        navigate('/login');
      }
    })
  }, [navigate])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tvshows' element={<TVShows />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
