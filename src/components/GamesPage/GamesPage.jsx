/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Space, Select, Spin } from 'antd'
import { GamesContext } from '../../contexts/GamesContext'
import GameCard from '../GameCard/GameCard'
import './GamesPage.css'

const sortOptions = [
  {
    label: 'name (A-Z)',
    value: 'nameAsc',
  },
  {
    label: 'name (Z-A)',
    value: 'nameDesc',
  },
  {
    label: 'release (newest)',
    value: 'releaseDesc',
  },
  {
    label: 'release (oldest)',
    value: 'releaseAsc',
  },
]

export default function GamesPage({ genres, platforms, pageState, handlers }) {
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
            onChange={handlers.handleGenreChange}
          />
          <Select
            mode='multiple'
            maxTagCount='responsive'
            placeholder='Platform'
            className='games-page__filter'
            options={platforms}
            onChange={handlers.handlePlatformChange}
          />
        </Space.Compact>
        <Select
          placeholder='Sort by'
          className='games-page__sort'
          options={sortOptions}
          onChange={handlers.handleSortChange}
        />
      </section>
      <section>
        {pageState === 'loading' ? (
          <div className='games-page__loader'>
            <Spin size='large' />
          </div>
        ) : pageState === 'loaded' ? (
          <ul className='games-page__list'>
            {games &&
              games
                // .slice(0, 30)
                .map(game => <GameCard key={game.id} {...game} />)}
          </ul>
        ) : (
          <p className='games-page__no-results'>
            {pageState === 'error'
              ? 'Что-то пошло не так 😢'
              : 'Ничего не нашлось 🧐'}
          </p>
        )}
      </section>
    </main>
  )
}
