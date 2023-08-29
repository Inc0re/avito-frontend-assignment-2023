import { useContext } from 'react'
import { Layout, Space, Select, Row, Col } from 'antd'
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
    <Content style={{ padding: '0 5%', width: '100%' }}>
      <Space direction='vertical' style={{ width: '100%' }} align='center'>
        <Space.Compact block style={{ width: '100%' }}>
          <Select mode='multiple' placeholder='Genre' style={{ width: '100%' }}>
            <Option value='Option1-1'>MOBA</Option>
            <Option value='Option1-2'>Shooter</Option>
          </Select>
          <Select
            mode='multiple'
            placeholder='Platform'
            style={{ width: '100%' }}
          >
            <Option value='Option2-1'>PC (Windows)</Option>
            <Option value='Option2-2'>Android</Option>
          </Select>
        </Space.Compact>
        <Row gutter={[16, 16]} justify='center'>
          {games &&
            games.slice(0, 29).map(game => (
              <Col key={game.id} xs={24} sm={24} md={12} lg={8} xl={6}>
                <GameCard key={game.id} {...game} />
              </Col>
            ))}
        </Row>
      </Space>
    </Content>
  )
}
