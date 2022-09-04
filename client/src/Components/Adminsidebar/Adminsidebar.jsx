import React from 'react'
import './Adminsidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';

function Adminsidebar() {
  return (
    <div className='sidebar'>
      <div className='top'> 
      <span className="logo">adminsidear
        </span>
        </div>
        <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon'/> 
            <span>
              Dashboard
            </span>
          </li>
          <p className="title">LIST</p>
          <li>
            <GroupIcon className='icon'/>
            <span>
              Users
            </span>
          </li>
          <li>
            <InventoryIcon className='icon'/>
            <span>
              Products
            </span>
          </li>
          <li>
            <AddShoppingCartIcon className='icon'/>
            <span>
              Orders
            </span>
          </li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>
              Delivery
            </span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <span>
              Stats
            </span>
          </li>
          <li>
            <span>
              Notification
            </span>
          </li>
          <li>
            <span>
              System Health
            </span>
          </li>
          <li>
            <span>
              Logs
            </span>
          </li>
          <li>
            <span>
              Settings 
            </span>
          </li>
          <p className="title">USER</p>
          <li>
          <AccountCircleIcon className='icon'/>
            <span>
              Profile
            </span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className='bottam'>
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Adminsidebar
