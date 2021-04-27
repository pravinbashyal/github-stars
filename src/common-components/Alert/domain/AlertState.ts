import { AlertType } from './Alert'

export type AlertState = {
  alert: AlertType
  setAlert: (alert: AlertType) => void
}
