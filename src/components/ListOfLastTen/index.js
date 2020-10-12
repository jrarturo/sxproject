import React from 'react'
import { LastTen } from '../../Pages/LastTen'
import { Title, List, Item } from './styles'
import { Loader } from '../Loader'
import { useFetchData } from '../hooks/useFetchData'
import { Navbar } from '../Navbar'

function useLastTenData () {
  const { data, loading } = useFetchData('https://api.spacexdata.com/v4/launches/past')
  return { data, loading }
}

export const ListOfLastTen = () => {
  const { data, loading } = useLastTenData()
  const renderList = () => (
    <>
      <Title>Past Launches</Title>
      <List>
        {
          data.slice(-10).map(lastten => <Item key={lastten.id}><LastTen path='/lasten' {...lastten} /></Item>)
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
