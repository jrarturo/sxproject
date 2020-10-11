import React from 'react'
import { Navbar } from '../components/Navbar'
import { LatestLaunch } from '../components/LatestLaunch'

export const Home = () => {
  return (
    <>
      <LatestLaunch />
      <Navbar />
    </>
  )
}
