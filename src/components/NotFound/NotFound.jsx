import './NotFound.css'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <main>
      <section className='not-found'>
        <h1 className='not-found__code'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
        <button className='not-found__link' onClick={() => navigate(-1)}>
          Назад
        </button>
      </section>
    </main>
  )
}

export default NotFound
