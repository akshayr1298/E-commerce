import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Adminsidebar from '../Adminsidebar/Adminsidebar'
import './AdminHome.scss'

function AdminHome() {
  return (
    <div className='home'>
      <Adminsidebar/>
      <div className="homeContainer">
        <AdminNavbar/>
        home container
      </div>
    </div>
  )
}

export default AdminHome
