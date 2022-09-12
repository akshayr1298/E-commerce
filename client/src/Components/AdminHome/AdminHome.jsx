import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Adminsidebar from '../Adminsidebar/Adminsidebar'
import AdminWidget from '../AdminWidget/AdminWidget'
import Chart from '../Chart/Chart'
import Featured from '../Featured/Featured'
import './AdminHome.scss'

function AdminHome() {
  return (
    <div className='home'>
      <Adminsidebar/>
      <div className="homeContainer">
        <AdminNavbar/>
       <div className="widgets">
        <AdminWidget type = "user"/>
        <AdminWidget type = "order"/>
        <AdminWidget type = "earning"/>
        <AdminWidget type = "balance"/>
       </div>
       <div className="charts">
        <Featured/>
        <Chart/>
       </div>
      </div>
    </div>
  )
}

export default AdminHome
