import { Routes, Route } from 'react-router-dom'
import { Layout, Typography } from 'antd'
import { SmileTwoTone } from '@ant-design/icons'
import GamesPage from '../GamesPage/GamesPage'
import GamePage from '../GamePage/GamePage'
import { useEffect, useState } from 'react'
import api from '../../utils/Api'
import { GamesContext } from '../../contexts/GamesContext'

const { Header, Footer } = Layout
const { Title } = Typography


const App = () => {
  const [games, setGames] = useState(null)

  useEffect(() => {
    api
      .getGames()
      .then(res => setGames(res))
      .catch(err => console.log(err))
  }, [])

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
