import { Routes, Route } from 'react-router-dom'
import { Layout, Typography, Space, Button } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
import { SmileTwoTone } from '@ant-design/icons'
import GamesPage from '../GamesPage/GamesPage'
import GamePage from '../GamePage/GamePage'
import { useEffect, useState } from 'react'
import api from '../../utils/Api'
import { GamesContext } from '../../contexts/GamesContext'

const { Header, Footer } = Layout
const { Title } = Typography
const gamesArr = [
  {
    id: 540,
    title: 'Overwatch 2',
    thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
    short_description:
      'A hero-focused first-person team shooter from Blizzard Entertainment.',
    game_url: 'https://www.freetogame.com/open/overwatch-2',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Activision Blizzard',
    developer: 'Blizzard Entertainment',
    release_date: '2022-10-04',
    freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
  },
  {
    id: 521,
    title: 'Diablo Immortal',
    thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
    short_description:
      'Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.',
    game_url: 'https://www.freetogame.com/open/diablo-immortal',
    genre: 'MMOARPG',
    platform: 'PC (Windows)',
    publisher: 'Blizzard Entertainment',
    developer: 'Blizzard Entertainment',
    release_date: '2022-06-02',
    freetogame_profile_url: 'https://www.freetogame.com/diablo-immortal',
  },
  {
    id: 517,
    title: 'Lost Ark',
    thumbnail: 'https://www.freetogame.com/g/517/thumbnail.jpg',
    short_description:
      'Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.',
    game_url: 'https://www.freetogame.com/open/lost-ark',
    genre: 'ARPG',
    platform: 'PC (Windows)',
    publisher: 'Amazon Games',
    developer: 'Smilegate RPG',
    release_date: '2022-02-11',
    freetogame_profile_url: 'https://www.freetogame.com/lost-ark',
  },
]

const App = () => {
  const [games, setGames] = useState(gamesArr)

  // useEffect(() => {
  //   api
  //     .getGames()
  //     .then(res => setGames(res))
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <GamesContext.Provider value={games}>
      <Layout className='layout'>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <SmileTwoTone style={{ fontSize: '40px', marginRight: '10px' }} />
          <Title level={1} style={{ color: '#fff' }}>
            Free games
          </Title>
        </Header>
        <Routes>
          <Route path='/' element={<GamesPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
        <Footer style={{ textAlign: 'center' }}>
          Free games ©{new Date().getFullYear()} Created by Daniil Borovov
        </Footer>
      </Layout>
    </GamesContext.Provider>
  )
}

export default App
