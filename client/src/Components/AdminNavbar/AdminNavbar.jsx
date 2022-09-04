
import React from 'react'
import './AdminNavbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

function AdminNavbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
            <div className="text" >
            <input type="text" className="text" placeholder='Search...'/>
            <SearchOutlinedIcon className='icon'/>
            </div>
        </div>
        <div className="items">
            <div className="item">
                <LanguageOutlinedIcon className='icon'/>
                English
            </div>
            <div className="item">
                <DarkModeOutlinedIcon className='icon'/>
               
            </div>
            <div className="item">
                <ChatBubbleOutlineOutlinedIcon className='icon'/>
                
            </div>
            <div className="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvX89ZGbcU2Wz-7rdRKrg5gxEPJCrQPuT7Q&usqp=CAU" 
                alt="" className='avatar' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
