import React from 'react'
import ReactLoading from 'react-loading'
import { Divi } from './styles'

export const Loader = () => (
  <Divi>
    <ReactLoading type='bars' color='#383D3B' height='15%' width='15%' />
  </Divi>
)
