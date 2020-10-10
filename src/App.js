import React from 'react'
import { ListOfLastTen } from './components/ListOfLastTen'
import { GlobalStyle } from './GlobalStyle'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfLastTen />
  </>
)
