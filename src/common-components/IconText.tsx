import React, { FC } from 'react'
import { Space } from 'antd'

export const IconText: FC<{ renderIcon: () => React.ReactNode; text: string | number }> = ({ text, renderIcon }) => (
  <Space>
    {renderIcon()}
    {text}
  </Space>
)
