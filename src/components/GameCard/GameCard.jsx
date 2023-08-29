/* eslint-disable react/prop-types */
import { Card, Space, Tag, Typography } from 'antd'
import { DesktopOutlined, QuestionCircleOutlined } from '@ant-design/icons'

// const { Meta } = Card
const { Title, Paragraph } = Typography

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
      style={{ margin: '10px' }}
      cover={<img alt={`${title} thumbnail`} src={thumbnail} />}
      // actions={[
      //   <Button type='primary' shape='round' size='large' key='open'>
      //     About
      //   </Button>,
      // ]}
    >
      {/* <Meta title={title} description={description} /> */}
      <Title
        ellipsis={{ rows: 1, expandable: false, tooltip: description }}
        level={2}
        style={{ marginTop: 0 }}
      >
        {title}
      </Title>
      <Paragraph
        ellipsis={{ rows: 2, expandable: false, tooltip: description }}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: '3em' }}
      >
        {description}
      </Paragraph>
      <Space
        direction='horizontal'
        style={{ marginTop: '1em', display: 'block' }}
      >
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
