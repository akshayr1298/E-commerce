
import React from 'react'
import './Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DataTable() {

    const rows = [
        {
            id:1143155,
            product:"Acer Nitro 5",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpwq_so-zbzRlc5z97YVIUVsgRj3fqQChNMsb7ZLHO-xT0rYUJiT66i5gA9CjXe9tjdU&usqp=CAU",
            customer:"John",
            date:"01-02-2022",
            amount:785,
            paymentMethod:"Cash on delivery",
            status:"Approved"

        }, {
            id:2235235,
            product:"Iphone 12",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpwq_so-zbzRlc5z97YVIUVsgRj3fqQChNMsb7ZLHO-xT0rYUJiT66i5gA9CjXe9tjdU&usqp=CAU",
            customer:"Abin",
            date:"01-02-2022",
            amount:785,
            paymentMethod:"Cash on delivery",
            status:"Pending"

        },
        {
            id:2342353,
            product:"Playstation 5",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpwq_so-zbzRlc5z97YVIUVsgRj3fqQChNMsb7ZLHO-xT0rYUJiT66i5gA9CjXe9tjdU&usqp=CAU",
            customer:"Cal",
            date:"01-05 -2022",
            amount:785,
            paymentMethod:"Online Payment",
            status:"Approved"

        },
        {
            id:2357741,
            product:"Acer Nitro 5",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpwq_so-zbzRlc5z97YVIUVsgRj3fqQChNMsb7ZLHO-xT0rYUJiT66i5gA9CjXe9tjdU&usqp=CAU",
            customer:"Tizen",
            date:"01-02-2022",
            amount:785,
            paymentMethod:"Cash on delivery",
            status:"Approved"

        },
        {
            id:2342355,
            product:"Acer Nitro 5",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpwq_so-zbzRlc5z97YVIUVsgRj3fqQChNMsb7ZLHO-xT0rYUJiT66i5gA9CjXe9tjdU&usqp=CAU",
            customer:"John",
            date:"01-02-2022",
            amount:785,
            paymentMethod:"Cash on delivery",
            status:"Pending"

        }
    ]

  return (
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>

          <TableCell className='tableCell'>Tracking ID</TableCell>
          <TableCell className='tableCell'>Product</TableCell>
          <TableCell className='tableCell'>Customer</TableCell>
          <TableCell className='tableCell'>Date</TableCell>
          <TableCell className='tableCell'>Amount</TableCell>
          <TableCell className='tableCell'>Payment Method</TableCell>
          <TableCell className='tableCell'>Status</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className='tableCell'>{row.id} </TableCell>
            <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image' />
                    {row.product}
                </div>
            </TableCell>
            <TableCell className='tableCell'>{row.customer}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.amount}</TableCell>
            <TableCell className='tableCell'>{row.paymentMethod}</TableCell>
            <TableCell className='tableCell'>
                <span className={`status  ${row.status}`}>{row.status}

                </span>
            </TableCell>


          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default DataTable
