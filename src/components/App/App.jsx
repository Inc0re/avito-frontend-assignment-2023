/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, Link } from 'react-router-dom'
import { SmileTwoTone } from '@ant-design/icons'
import GamesPage from '../GamesPage/GamesPage'
import GamePage from '../GamePage/GamePage'
import NotFound from '../NotFound/NotFound'
import { useEffect, useState } from 'react'
import api from '../../utils/Api'
import {
  getUniqueArrFromData,
  getSortedSelectOptions,
  filterByMatch,
  sortByDate,
  sortByTitle,
} from '../../utils/functions'
import { GamesContext } from '../../contexts/GamesContext'
import './App.css'

const App = () => {
  const [pageState, setPageState] = useState('loading')
  // all games data
  const [games, setGames] = useState(null)
  // filtered (shown) games data
  const [filteredGames, setFilteredGames] = useState(null)
  // selected options for filters and sort
  const [selectedGenres, setSelectedGenres] = useState([])
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  const [selectedSort, setSelectedSort] = useState(null)
  // options for filters and sort
  const [genres, setGenres] = useState(null)
  const [platforms, setPlatforms] = useState(null)

  // get games data from api
  useEffect(() => {
    api
      .getGames()
      .then(res => {
        setGames(res)
        setFilteredGames(res)
        const genresArr = getUniqueArrFromData(res, 'genre')
        const platformsArr = getUniqueArrFromData(res, 'platform')
        setGenres(getSortedSelectOptions(genresArr))
        setPlatforms(getSortedSelectOptions(platformsArr))
        setPageState('loaded')
      })
      .catch(err => {
        console.log(err)
        setPageState('error')
      })
  }, [])

  // watch for filter changes and update filtered games
  useEffect(() => {
    if (!games) return
    // console.log('filter changed')
    handleFilterChange()
  }, [selectedGenres, selectedPlatforms, selectedSort])

  // filter and sort games
  function handleFilterChange() {
    let filtered = [...games]
    if (selectedGenres.length) {
      filtered = filterByMatch(filtered, 'genre', selectedGenres)
    }
    if (selectedPlatforms.length) {
      filtered = filterByMatch(filtered, 'platform', selectedPlatforms)
    }
    if (selectedSort) {
      switch (selectedSort) {
        case 'nameAsc':
          filtered = sortByTitle(filtered, 'asc')
          break
        case 'nameDesc':
          filtered = sortByTitle(filtered, 'desc')
          break
        case 'releaseDesc':
          filtered = sortByDate(filtered, 'release_date', 'desc')
          break
        case 'releaseAsc':
          filtered = sortByDate(filtered, 'release_date', 'asc')
          break
        default:
          break
      }
    }
    setFilteredGames(filtered)
  }

  // TODO: add filters reset button

  // filters handlers
  function handleGenreChange(value) {
    setSelectedGenres(value)
  }

  function handlePlatformChange(value) {
    setSelectedPlatforms(value)
  }

  function handleSortChange(value) {
    setSelectedSort(value)
  }

  return (
    <GamesContext.Provider value={filteredGames}>
      <div className='app'>
        <header className='header'>
          <Link className='header__link' to='/'>
            <SmileTwoTone style={{ fontSize: '40px', marginRight: '10px' }} />
            <h1 className='header__text'>Free games</h1>
          </Link>
        </header>
        <Routes>
          <Route
            path='/'
            element={
              <GamesPage
                pageState={pageState}
                genres={genres}
                platforms={platforms}
                handlers={{
                  handleGenreChange,
                  handlePlatformChange,
                  handleSortChange,
                }}
              />
            }
          />
          <Route path='/games/:id' element={<GamePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <footer className='footer'>
          <p className='footer__text'>
            Free games ©{new Date().getFullYear()} Created by{' '}
            <a className='footer__link' href='https://github.com/Inc0re'>Daniil Borovov</a>
          </p>
        </footer>
      </div>
    </GamesContext.Provider>
  )
}

export default App
