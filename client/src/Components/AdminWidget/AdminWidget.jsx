
import React from 'react'
import './AdminWidget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function AdminWidget() {
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">500</span>
        <span className="link">See all users</span>
       
      </div>
      <div className="right">
        <div className="percentage negative">
            <KeyboardArrowUpIcon/> 
            20%
        </div>
        <PersonOutlineOutlinedIcon className='icon'/>
      </div>
    </div>
  )
}

export default AdminWidget

