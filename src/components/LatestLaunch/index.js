import React from 'react'
import { Latest } from '../../Pages/Latest'
import { Loader } from '../Loader'
import { List, Item } from './styles'
import { useFetchData } from '../hooks/useFetchData'

function useLastestData () {
  const { data, loading } = useFetchData('https://api.spacexdata.com/v4/launches/latest')
  return { data, loading }
}
export const LatestLaunch = () => {
  const { data, loading } = useLastestData()
  const renderList = () => (
    <Item key={data.id}><Latest {...data} /></Item>
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
