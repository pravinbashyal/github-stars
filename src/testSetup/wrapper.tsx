import { BrowserRouter as Router } from 'react-router-dom'
import React, { FC } from 'react'

export const Wrapper: FC<{}> = ({ children }) => <Router>{children}</Router>
