import React from "react"
import {Typography} from "antd"

export interface PageHeaderProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const {Title} = Typography;

export function PageHeader(
  {children, style}: PageHeaderProps) {
  return (
    <Title
      style={style}
    >
      {children}
    </Title>
  )
}

