import { createContext, useContext } from 'react'
import { AlertState } from '../domain/AlertState'

export const AlertContext = createContext<AlertState | undefined>(undefined)

export const useAlertContext = (): AlertState => {
  const alert = useContext(AlertContext)
  if (!alert) {
    throw new Error('useAlertContext should be used within alert context')
  }
  return alert
}
