/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Tooltip, Tag } from 'antd'
import { DesktopOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { getRuDate } from '../../utils/functions'
import './GameCard.css'

export default function GameCard(props) {
  const {
    id,
    title,
    thumbnail,
    short_description: description,
    genre,
    platform,
    publisher,
    release_date: release,
  } = props

  return (
    <li>
      <Link to={'/games/' + id} className='game-card__overlay'>
        <div className='game-card'>
          <img
            src={thumbnail}
            alt={`Постер игры ${title}`}
            className='game-card__thumbnail'
          />
          <div className='game-card__body'>
            <h2 className='game-card__title'>{title}</h2>
            <Tooltip title={title + ' - ' + description}>
              <p className='game-card__description'>{description}</p>
            </Tooltip>
            <p className='game-card__description'>
              {`Publisher: ${publisher}`}
              <br />
              {`Release: ${getRuDate(release)}`}
            </p>
            <div className='game-card__tags'>
              <Tag icon={<QuestionCircleOutlined />} color='orange'>
                {genre}
              </Tag>
              <Tag icon={<DesktopOutlined />} color='green'>
                {platform}
              </Tag>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
