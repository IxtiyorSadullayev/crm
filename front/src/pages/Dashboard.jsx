import React from 'react'
import DashboardPage from '../elements/dashboard'
import SiteNavbar from '../elements/site.route'
import {Outlet} from 'react-router-dom'
function Dashboard() {
  return (
    <>
        <DashboardPage />
        <Outlet />
    </>
  )
}

export default Dashboard