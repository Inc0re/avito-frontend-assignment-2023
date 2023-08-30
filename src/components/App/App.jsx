import { Routes, Route } from 'react-router-dom'
import { SmileTwoTone } from '@ant-design/icons'
import GamesPage from '../GamesPage/GamesPage'
import GamePage from '../GamePage/GamePage'
import NotFound from '../NotFound/NotFound'
import { useEffect, useState } from 'react'
import api from '../../utils/Api'
import { GamesContext } from '../../contexts/GamesContext'
import './App.css'

const App = () => {
  const [games, setGames] = useState(null)
  // const [genres, setGenres] = useState(null)
  // const [platforms, setPlatforms] = useState(null)

  const genres = []
  for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i
    genres.push({
      label: `Long Label: ${value}`,
      value,
    })
  }

  const platforms = []
  for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i
    platforms.push({
      label: `Long Label: ${value}`,
      value,
    })
  }

  useEffect(() => {
    api
      .getGames()
      .then(res => setGames(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <GamesContext.Provider value={games}>
      <div className='app'>
        <header className='header'>
          <SmileTwoTone style={{ fontSize: '40px', marginRight: '10px' }} />
          <h1 className='header__text'>Free games</h1>
        </header>
        <Routes>
          <Route
            path='/'
            element={<GamesPage genres={genres} platforms={platforms} />}
          />
          <Route path='/game' element={<GamePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <footer className='footer'>
          <p className='footer__text'>
            Free games ©{new Date().getFullYear()} Created by Daniil Borovov
          </p>
        </footer>
      </div>
    </GamesContext.Provider>
  )
}

export default App
