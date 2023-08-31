/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Carousel, Button, Image, Collapse, Spin } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import api from '../../utils/Api'
import { getRuDate } from '../../utils/functions'
import './GamePage.css'

export default function GamePage() {
  const [game, setGame] = useState(null)
  const [pageState, setPageState] = useState('loading')
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    // TODO: add local storage 5 min cache
    const cachedGame = getCachedGame()
    if (cachedGame && cachedGame.id === +id) {
      setGame(cachedGame)
      setPageState('loaded')
      return
    }
    api
      .getGame(id)
      .then(res => {
        if (res.status === 0) return navigate('/404')
        setGame(res)
        setPageState('loaded')
        cacheGame(300, res)
      })
      .catch(err => {
        console.log(err)
        setPageState('error')
      })
  }, [])

  function cacheGame(seconds, game) {
    const now = Date.now()
    const expiration = now + seconds * 1000
    const item = {
      value: game,
      expiration,
    }
    localStorage.setItem('game', JSON.stringify(item))
  }

  function getCachedGame() {
    const game = localStorage.getItem('game')
    if (!game) return null
    const item = JSON.parse(game)
    const now = Date.now()
    if (now > item.expiration) {
      localStorage.removeItem('game')
      return null
    }
    return item.value
  }

  return (
    <>
      {pageState === 'loaded' ? (
        <main className='game'>
          <h2 className='game__title'>{game.title}</h2>
          <img
            className='game__poster'
            src={game.thumbnail}
            alt={`Постер игры ${game.title}`}
          />
          <p className='game__description'>{game.description}</p>
          <div className='game__screenshots'>
            <Image.PreviewGroup
              items={game.screenshots.map(screenshot => ({
                src: screenshot.image,
              }))}
            >
              <Carousel autoplay>
                {game.screenshots.map(screenshot => (
                  // TODO: fix behavior when images has different sizes
                  <Image
                    key={screenshot.id}
                    src={screenshot.image}
                    alt={`Скриншот игры ${game.title}`}
                  />
                ))}
              </Carousel>
            </Image.PreviewGroup>
          </div>
          <section className='game__info'>
            <Collapse
              items={[
                {
                  key: '1',
                  label: 'Info',
                  children: (
                    <p>
                      <strong>Release date:</strong>{' '}
                      {getRuDate(game.release_date)}
                      <br />
                      <strong>Publisher:</strong> {game.publisher}
                      <br />
                      <strong>Developer:</strong> {game.developer}
                      <br />
                      <strong>Genre:</strong> {game.genre}
                    </p>
                  ),
                },
                {
                  key: '2',
                  label: 'System requirements',
                  children: (
                    <p>
                      <strong>OS:</strong> {game.minimum_system_requirements.os}
                      <br />
                      <strong>Processor:</strong>{' '}
                      {game.minimum_system_requirements.processor}
                      <br />
                      <strong>Memory:</strong>{' '}
                      {game.minimum_system_requirements.memory}
                      <br />
                      <strong>Graphics:</strong>{' '}
                      {game.minimum_system_requirements.graphics}
                      <br />
                      <strong>Storage:</strong>{' '}
                      {game.minimum_system_requirements.storage}
                    </p>
                  ),
                },
              ]}
            />
          </section>
          <Button className='game__back-btn' icon={<ArrowLeftOutlined />} onClick={() => navigate('/')}>
            Back
          </Button>
        </main>
      ) : pageState === 'loading' ? (
        <div className='games-page__loader'>
          <Spin size='large' />
        </div>
      ) : (
        <p className='games-page__no-results'>Что-то пошло не так 😢</p>
      )}
    </>
  )
}
