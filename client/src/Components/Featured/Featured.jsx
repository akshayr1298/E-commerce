
import React from 'react'
import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Featured() {
    const percentage = 66;
  return (
    <div className='featured'>
      <div className="top">
         <h1 className="title">Total Revenue</h1>
         <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bootam">
        <div className="featuredChart">
         <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={3}/>
        </div>
        <p className="title">Total sale made by today</p>
        <p className="amount">$500</p>
        <p className="desc">blaablaablaa</p>
         <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="resultAmount">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last week</div>
                <div className="itemResult">
                    <KeyboardArrowUpIcon fontSize='small'/>
                    <div className="resultAmount">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small'/>
                    <div className="resultAmount">$12.4k</div>
                </div>
            </div>
         </div>
          
      </div>
    </div>
  )
}

export default Featured
