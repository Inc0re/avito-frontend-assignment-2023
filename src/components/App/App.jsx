import { Routes, Route } from 'react-router-dom'
import { SmileTwoTone } from '@ant-design/icons'
import GamesPage from '../GamesPage/GamesPage'
import GamePage from '../GamePage/GamePage'
import NotFound from '../NotFound/NotFound'
import { useEffect, useState } from 'react'
import api from '../../utils/Api'
import { getUniqueArrFromData, getSortedSelectOptions } from '../../utils/functions'
import { GamesContext } from '../../contexts/GamesContext'
import './App.css'

const App = () => {
  const [games, setGames] = useState(null)
  const [genres, setGenres] = useState(null)
  const [platforms, setPlatforms] = useState(null)

  useEffect(() => {
    api
      .getGames()
      .then(res => {
        setGames(res)
        const genresArr = getUniqueArrFromData(res, 'genre')
        console.log(getSortedSelectOptions(genresArr))
        const platformsArr = getUniqueArrFromData(res, 'platform')
        setGenres(getSortedSelectOptions(genresArr))
        setPlatforms(getSortedSelectOptions(platformsArr))
      })
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
