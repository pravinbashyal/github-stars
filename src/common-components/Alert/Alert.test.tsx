import { render, screen } from '@testing-library/react'
import React, { FC } from 'react'
import { Wrapper } from '../../testSetup/wrapper'
import { AlertLevel } from './domain/AlertLevel'
import { AlertContext } from './state/AlertContext'
import { AlertGlobal } from './view/Alert'

const setup = ({ message, alertLevel } = { message: '' }) => {
  const Wrapper: FC<{}> = ({ children }) => (
    <AlertContext.Provider value={{ alert: { message, alertLevel }, setAlert: jest.fn() }}>
      {children}
    </AlertContext.Provider>
  )

  render(<AlertGlobal></AlertGlobal>, { wrapper: Wrapper })
}

describe('Alert', () => {
  test('does not show alert by default', () => {
    setup()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  test('shows alert when alert message is sent', () => {
    setup({ message: 'Error to fetch' })
    const alertEl = screen.queryByRole('alert')
    expect(alertEl).toBeInTheDocument()
  })

  test('shows info alert by default', () => {
    setup({ message: 'Error to fetch' })
    const alertEl = screen.queryByRole('alert')
    expect(alertEl?.classList).toContain('ant-alert-info')
  })

  test.each`
    alertLevel            | className
    ${AlertLevel.Error}   | ${'ant-alert-error'}
    ${AlertLevel.Info}    | ${'ant-alert-info'}
    ${AlertLevel.Warning} | ${'ant-alert-warning'}
  `(
    'shows element with class $className when the alert level is $alertLevel',
    ({ alertLevel, className }) => {
      setup({ message: 'Some message', alertLevel })
      const alertEl = screen.queryByRole('alert')
      expect(alertEl?.classList).toContain(className)
    }
  )
})
