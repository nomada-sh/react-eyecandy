import React from "react"
import {Typography} from "antd"

export interface PageHeaderProps {
  title: string
  subtitle?: string
  style?: React.CSSProperties
}

const {Title} = Typography;

export function PageHeader(
  {style = {}, title, subtitle}: PageHeaderProps) {
  return (
    <div
      style={{
        marginBottom: 0,
        ...style,
      }}
    >
      <Title
        style={{
          margin: 0,
        }}
      >
        {title}
      </Title>
      {subtitle !== undefined ? (
        <Title level={3} style={{margin: 0}}>{subtitle}</Title>
      ) : null}
    </div>
  )
}

