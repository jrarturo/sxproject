import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Home } from './Pages/Home'
import { Logo } from './components/Logo'
import { Router } from '@reach/router'
import { LastTen } from './Pages/LastTen'
import { NextTen } from './Pages/NextTen'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path='/' />
      <LastTen path='/' />
      <NextTen path='/' />
    </Router>
  </>
)
