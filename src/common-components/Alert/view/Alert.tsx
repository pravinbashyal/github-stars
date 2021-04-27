import { Alert } from 'antd'
import React, { FC } from 'react'
import { useAlert } from '../state/useAlert'

export const AlertGlobal: FC<{}> = () => {
  const { alert } = useAlert()
  return !!alert.message ? (
    <Alert
      style={{ position: 'fixed', bottom: 0, width: '500px', left: '50%', marginLeft: '-250px' }}
      message={alert.message}
      type={alert.alertLevel}
      showIcon
      closable
    />
  ) : null
}
