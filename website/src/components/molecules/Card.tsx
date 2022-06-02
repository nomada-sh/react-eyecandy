import React from "react"
import {Card as AntCard} from "antd"
import Meta from "antd/lib/card/Meta"

export interface CardProps {
  title: string
  description?: string
  image?: string
  style?: React.CSSProperties
}

export function Card(
  {title, description, image, style = {}}: CardProps) {
  return (
    <AntCard
      hoverable
      style={{
        width: 300,
        ...style,
      }}
      cover={<img src={image} />}
    >
      <Meta title={title} description={description} />
    </AntCard>
  )
}

