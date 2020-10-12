import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Home } from './Pages/Home'
import { Logo } from './components/Logo'
import { Router } from '@reach/router'
import { ListOfLastTen } from './components/ListOfLastTen'
import { ListOfNextTen } from './components/ListNextTen'
// import SearchByDate from './components/SearchByDate'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <div>
      <Router>
        <Home path='/' />
        <ListOfLastTen path='/lasten' />
        <ListOfNextTen path='/nexten' />
        {/* <SearchByDate path='/date' /> */}
      </Router>
    </div>
  </>
)
