import React from 'react'
import { NextTen } from '../../Pages/NextTen'
import { List, Item } from './styles'
import { Loader } from '../Loader'
import { useFetchData } from '../hooks/useFetchData'

function useNextTenData () {
  const { data, loading } = useFetchData('https://api.spacexdata.com/v4/launches/upcoming')
  return { data, loading }
}

export const ListOfNextTen = () => {
  const { data, loading } = useNextTenData()
  const renderList = () => (
    <List>
      {
        data.slice(-10).map(nextten => <Item key={nextten.id}><NextTen {...nextten} /></Item>)
      }
    </List>
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
