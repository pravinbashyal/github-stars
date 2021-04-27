import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { FC } from 'react'
import { IconText } from '../../../common-components/IconText'

type StarButtonProps = {
  count: number
  isSelected: boolean
  onClick: () => void
  label: string
}

export const StarButton: FC<StarButtonProps> = ({ count, isSelected, onClick, label }) => {
  return (
    <IconText
      renderIcon={() => (
        <Button
          onClick={onClick}
          icon={isSelected ? <StarFilled /> : <StarOutlined />}
          aria-label={label}
        ></Button>
      )}
      text={count}
    />
  )
}
