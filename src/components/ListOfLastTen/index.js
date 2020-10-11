import React from 'react'
import { LastTen } from '../../Pages/LastTen'
import { List, Item } from './styles'
import { Loader } from '../Loader'
import { useFetchData } from '../hooks/useFetchData'

function useLastTenData () {
  const { data, loading } = useFetchData('https://api.spacexdata.com/v4/launches/past')
  return { data, loading }
}

export const ListOfLastTen = () => {
  const { data, loading } = useLastTenData()
  const renderList = () => (
    <List>
      {
        data.slice(-10).map(lastten => <Item key={lastten.links}><LastTen {...lastten} /></Item>)
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
