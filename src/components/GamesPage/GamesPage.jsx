import { useContext } from 'react'
import { Layout, Space, Select } from 'antd'
import { GamesContext } from '../../contexts/GamesContext'
import GameCard from '../GameCard/GameCard'

const { Content } = Layout
const { Option } = Select

export default function GamesPage() {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken()
  const games = useContext(GamesContext)

  return (
    <Content style={{ padding: '0 50px' }}>
      <Space direction='vertical' style={{ width: '100%' }} align='center'>
      <Space.Compact block>
        <Select defaultValue='Option1-1'>
          <Option value='Option1-1'>Option1-1</Option>
          <Option value='Option1-2'>Option1-2</Option>
        </Select>
        <Select defaultValue='Option2-2'>
          <Option value='Option2-1'>Option2-1</Option>
          <Option value='Option2-2'>Option2-2</Option>
        </Select>
      </Space.Compact>
      <Space wrap>
        {games.map(game => (
          <GameCard key={game.id} {...game} />
        ))}
      </Space>
      </Space>
    </Content>
  )
}
