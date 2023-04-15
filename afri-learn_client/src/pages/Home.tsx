import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="App">
      Home
      <hr />
      <Outlet />
    </div>
  )
}

export default Home
