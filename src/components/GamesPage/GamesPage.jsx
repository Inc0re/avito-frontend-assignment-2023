/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Space, Select } from 'antd'
import { GamesContext } from '../../contexts/GamesContext'
import GameCard from '../GameCard/GameCard'
import './GamesPage.css'

export default function GamesPage({ genres, platforms }) {
  const games = useContext(GamesContext)

  return (
    <main className='games-page'>
      <section className='games-page__filters'>
        <Space.Compact block>
          <Select
            mode='multiple'
            maxTagCount='responsive'
            placeholder='Genre'
            className='games-page__filter'
            options={genres}
          />
          <Select
            mode='multiple'
            maxTagCount='responsive'
            placeholder='Platform'
            className='games-page__filter'
            options={platforms}
          />
        </Space.Compact>
      </section>
      <section>
        {games ? (
          <ul className='games-page__list'>
            {games &&
              games
                .slice(0, 29)
                .map(game => <GameCard key={game.id} {...game} />)}
          </ul>
        ) : (
          <p className='games-page__no-results'>Что-то пошло не так 😢</p>
        )}
      </section>
    </main>
  )
}
