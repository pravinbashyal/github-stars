import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { FC } from 'react'
import { IconText } from '../../../common-components/IconText'

export const Star: FC<{ count: number; isSelected: boolean; onClick: () => void }> = ({
  count,
  isSelected,
  onClick,
}) => {
  return (
    <IconText
      renderIcon={() => <Button onClick={onClick} icon={isSelected ? <StarFilled /> : <StarOutlined />}></Button>}
      text={count}
    />
  )
}
