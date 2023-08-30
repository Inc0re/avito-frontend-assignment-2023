import { useContext } from 'react'
import { Space, Select } from 'antd'
import { GamesContext } from '../../contexts/GamesContext'
import GameCard from '../GameCard/GameCard'
import './GamesPage.css'

const { Option } = Select

export default function GamesPage() {
  const games = useContext(GamesContext)

  return (
    <section className='games-page'>
        <Space.Compact block>
          <Select mode='multiple' placeholder='Genre'>
            <Option value='Option1-1'>MOBA</Option>
            <Option value='Option1-2'>Shooter</Option>
          </Select>
          <Select
            mode='multiple'
            placeholder='Platform'
          >
            <Option value='Option2-1'>PC (Windows)</Option>
            <Option value='Option2-2'>Android</Option>
          </Select>
        </Space.Compact>
        <ul className='games-page__list'>
          {games &&
            games.slice(0, 29).map(game => (
                <GameCard key={game.id} {...game} />
            ))}
        </ul>
    </section>
  )
}
