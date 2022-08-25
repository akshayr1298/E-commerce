
import React from 'react'
import './Adminsidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';

function Adminsidebar() {
  return (
    <div className='sidebar'>
      <div className='top'> 
      <span className="logo">lamadmin</span>
        </div> 
        <hr />
      <div className='center'>
        <ul>
            <li>
              <DashboardIcon/>
                <span>Dashboard</span>
            </li>
            <li>
                <span>Dashboard</span>
            </li>
            <li>
                <span>Dashboard</span>
            </li>
            <li>
                <span>Dashboard</span>
            </li>
        </ul>
      </div>
      <div className='bottom'> color options</div>
    </div>
  )
}

export default Adminsidebar
