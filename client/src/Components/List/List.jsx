
import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Adminsidebar from '../Adminsidebar/Adminsidebar'
import UserList from '../UserList/UserList'
import './list.scss'
function List() {
  return (
    <div className='list'>
      <Adminsidebar/>
      <div className="listContainer">
        <AdminNavbar/>
        <UserList/>
      </div>
    </div>
  )
}

export default List
