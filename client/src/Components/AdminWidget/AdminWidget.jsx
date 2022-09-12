
import React from 'react'
import './AdminWidget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function AdminWidget({type }) {
  let data;

  // temporary
  const amount = 100
  const diff = 20

  switch(type){
    case 'user':
      data={
        title:'USERS',
        isMoney:false,
        link:"See all users",
        icon:<PersonOutlineOutlinedIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>
      };
       break;
       case 'order':
        data={
          title:'ORDERS',
          isMoney:false,
          link:"View all orders",
          icon:<ShoppingCartIcon className='icon' style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>,
        };
         break;
         case 'earning':
          data={
            title:'EARNINGS',
            isMoney:true,
            link:"View net earnings",
            icon:<MonetizationOnIcon className='icon' style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>
          };
           break;
           case 'balance':
            data={
              title:'BALANCE',
              isMoney:true,
              link:"See details",
              icon:<AccountBalanceWalletIcon className='icon'/>
            };
             break;
      default:
       break
  }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount} </span>
        <span className="link">{data.link} </span>
       
      </div>
      <div className="right">
        <div className="percentage negative">
            <KeyboardArrowUpIcon/> 
            {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default AdminWidget

