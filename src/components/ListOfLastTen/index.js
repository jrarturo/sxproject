import React, { useState, useEffect } from 'react'
import { LastTen } from '../LastTen'
import { List, Item } from './styles'

export const ListOfLastTen = () => {
  const [data, setData] = useState([])

  useEffect(function () {
    window.fetch('https://api.spacexdata.com/v4/launches/past')
      .then(res => res.json())
      .then(response => {
        setData(response)
        console.log(response)
      })
  }, [])

  const renderList = () => (
    <List>
      {
        data.slice(-10).map(lastten => <Item key={lastten.id}><LastTen {...lastten} /></Item>)
      }
    </List>
  )

  return (
    renderList()
  )
}
