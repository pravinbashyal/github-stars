import { useEffect, useState } from 'react'
import { AlertContext, useAlertContext } from './AlertContext'
import { AlertLevel } from '../domain/AlertLevel'
import { isNil } from 'lodash-es'
import { AlertType } from '../domain/Alert'

export const useAlert = (): {
  alert: AlertType
  clearAlert: () => void
  addAlert: (alert: AlertType) => void
} => {
  const { alert, setAlert } = useAlertContext()
  const [message, setMessage] = useState<string>(alert.message)
  const [alertLevel, setAlertLevel] = useState<AlertLevel>(alert.alertLevel)
  const clearAlert = () => {
    setMessage('')
    setAlertLevel(AlertLevel.Info)
  }
  useEffect(() => {
    if (!isNil(message)) {
      setAlert({ message, alertLevel })
    }
  }, [message, alertLevel])

  const addAlert = ({ message, alertLevel }: { message: string; alertLevel: AlertLevel }) => {
    setMessage(message)
    setAlertLevel(alertLevel)
  }

  return {
    alert,
    clearAlert,
    addAlert,
  }
}

export const useAddErrorAlert = (error: string) => {
  const { addAlert } = useAlert()
  useEffect(() => {
    if (!!error) {
      addAlert({ message: 'Could not fetch repositories', alertLevel: AlertLevel.Error })
    }
  }, [error])
}

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState<AlertType>({ message: '', alertLevel: AlertLevel.Info })
  return <AlertContext.Provider value={{ alert, setAlert }}>{children}</AlertContext.Provider>
}
