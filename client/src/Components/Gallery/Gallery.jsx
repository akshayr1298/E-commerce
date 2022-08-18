
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from '../Gallery/Item'
import '../Gallery/Gallery.css'


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:'flex',
  flexFlow:'row'
};

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const item = {
  'overflow':'hidden',
  
};
const image ={
'width': '100%',
'height': '100%',
'objectFit': 'fill',

}

function Gallery() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
<>
    <Typography variant='h4' component="h4" color="#455A64" sx={{mt:5,
      "&:hover":{
        color:"#263238",
        cursor:"pointer",
      }  



      }}>Gallery</Typography>
    <div className="gallery">
    
      <Carousel breakPoints={breakPoints}>
        <Item style={item}>
          
          <img style={image}
          onClick={handleOpen}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44c62a34522169.5a575c5ea2903.jpg"
            alt=""
          />
        </Item>
        <Item style={item}>
          
          <img style={image}
           onClick={handleOpen}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/93d88834522169.5a575c5ea3701.jpg"
            alt=""
          />
        </Item>
        <Item style={item}>
          
          <img style={image}
           onClick={handleOpen}
            src="https://i0.wp.com/www.indiaretailing.com/wp-content/uploads/2016/09/peter-england.jpg?resize=681%2C400&ssl=1"
            alt=""
          />
        </Item>
        <Item style={item}>
          
          <img style={image}
           onClick={handleOpen}
            src="https://lh3.googleusercontent.com/P1vjaKgJ6JzCJnUvSEmPgtrgzdpBNafDJoA1I1cIGbusEGdSjyQ1dy_dGs48gqkQZEU48B6GKcIP11_ElZLjJnwrjK0=w512-rw"
            alt=""
          />
        </Item>
        <Item style={item}>
          
          <img style={image}
           onClick={handleOpen}
            src="https://lh3.googleusercontent.com/8nfxz3-GpTiQfq0Zg6v2sddpJRg00Oz5xcnnjWkTeQJmrMALc4D1EwMW-R1dK79Y9EuiJpuCaOmUGzS5KjG7nTbnxY8=w512-rw"
            alt=""
          />
        </Item>
        
      
       
      </Carousel>
    </div>
    <Button >Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Carousel breakPoints={breakPoints}>
        <Item style={item}>
          
          <img style={image}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/44c62a34522169.5a575c5ea2903.jpg"
            alt=""
          />
        </Item>
        <Item style={item}>
          
          <img style={image}
            src="https://lh3.googleusercontent.com/8nfxz3-GpTiQfq0Zg6v2sddpJRg00Oz5xcnnjWkTeQJmrMALc4D1EwMW-R1dK79Y9EuiJpuCaOmUGzS5KjG7nTbnxY8=w512-rw"
            alt=""
          />
        </Item>
        <Item style={item}>
          
          <img style={image}
          
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/93d88834522169.5a575c5ea3701.jpg"
            alt=""
          />
        </Item>
        <Item style={item}>
          
          <img style={image}
          
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/93d88834522169.5a575c5ea3701.jpg"
            alt=""
          />
        </Item>
        <Item style={item}>
          
          <img style={image}
          
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/93d88834522169.5a575c5ea3701.jpg"
            alt=""
          />
        </Item>
        
        </Carousel>
        </Box>
      </Modal>
    </>
  );
}

export default Gallery



