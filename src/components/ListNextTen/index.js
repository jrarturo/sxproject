import React from 'react'
import { NextTen } from '../../Pages/NextTen'
import { Title, List, Item } from './styles'
import { Loader } from '../Loader'
import { useFetchData } from '../hooks/useFetchData'
import { Navbar } from '../Navbar'

function useNextTenData () {
  const { data, loading } = useFetchData('https://api.spacexdata.com/v4/launches/upcoming')
  return { data, loading }
}

export const ListOfNextTen = () => {
  const { data, loading } = useNextTenData()
  const renderList = () => (
    <>
      <Title>Next Launches</Title>
      <List>
        {
          data.slice(-10).map(nextten => <Item key={nextten.id}><NextTen path='/nexten' {...nextten} /></Item>)
        }
      </List>
      <Navbar />
    </>
  )
  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    renderList()
  )
}
