import { Card, Button, Descriptions, Space, Tag, Divider } from 'antd'
import { DesktopOutlined, QuestionCircleOutlined } from '@ant-design/icons'

const { Meta } = Card

export default function GameCard(props) {
  const {
    title,
    thumbnail,
    short_description: description,
    genre,
    platform,
  } = props

  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt={`${title} thumbnail`} src={thumbnail} />}
      actions={[
        <Button type='primary' shape='round' size='large' key='open'>
          About
        </Button>,
      ]}
    >
      <Meta title={title} description={description} />
      {/* <Divider/> */}
      <Space direction='vertical' style={{marginTop:'1em'}}>
      <Tag icon={<QuestionCircleOutlined />} color='orange'>
        {genre}
      </Tag>
      <Tag icon={<DesktopOutlined />} color='green'>
        {platform}
      </Tag>
      </Space>
    </Card>
  )
}
