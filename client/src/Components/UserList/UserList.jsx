
import React from 'react'
import "./userlist.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesorce';
import { Button } from 'antd';

function UserList() {

  const actionColumn = [{field:'action', headerName:"Action",width:300,renderCell:()=>{
    return(
      <div className='cellAction'>
        {/* <div className="unBlockButton">Unblock</div> */}
        <Button className='unBlockButton'>Unblock</Button>
        <Button className='blockButton'>Block</Button>
         {/* <div className="blockButton">Block</div> */}
      </div>
    )
  }}]
  return (
    <div className='datatable'>
         <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      
    </div>
  )
}

export default UserList
