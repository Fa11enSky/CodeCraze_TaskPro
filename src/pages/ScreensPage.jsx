import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ScreensPage = () => {
  return (
    <div style={{backgroundColor:"#555555",width:"100%",flexGrow:1}}>
      <Link to={'1234'}>change</Link>
      <Outlet/>
    </div>
  )
}

export default ScreensPage
