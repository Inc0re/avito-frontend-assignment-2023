import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/Api'
import './GamePage.css'

export default function GamePage() {
  const [game, setGame] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    api
      .getGame(id)
      .then(res => setGame(res))
      .catch(err => console.log(err))
  }, [])

  return (
    // название+
    // дата релиза (в российском формате)
    // издатель
    // разработчик
    // жанр
    // картинка/постер
    // карусель скриншотов
    // системные требования

    // <main className='game'>
    //   <h2 className='game__title'>{game.title}</h2>
    //   <img
    //     className='game__poster'
    //     src={game.thumbnail}
    //     alt={`Постер игры ${game.title}`}
    //   />
    //   <p className='game__description'>{game.description}</p>
    //   <div className='game__screenshots'></div>
    //   <section className='game__info'></section>
    // </main>
    // if game is null, navigate to 404
    // if game show game
    <>
      {game ? (
        <main className='game'>
          <h2 className='game__title'>{game.title}</h2>
          <img
            className='game__poster'
            src={game.thumbnail}
            alt={`Постер игры ${game.title}`}
          />
          <p className='game__description'>{game.description}</p>
          <div className='game__screenshots'></div>
          <section className='game__info'></section>
        </main>
      ) : (
        <h1>404</h1>
      )}
    </>
  )
}
