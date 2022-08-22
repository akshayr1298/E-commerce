import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';
import './Cardswiper.css'

export default function MultiActionAreaCard() {
  return (
    <Grid container fixed spacing={8}>

    <Grid item xs={'12'}>
      <Typography align='center' variant='h5' sx={{mt:2}}>
        New Arrivals
      </Typography>
      </Grid>
      <Grid item xs={'12'} justifyContent='center' sx={{display:'flex'}} sm={'6'} md={'3'}>
    <Card sx={{ maxWidth: 345 }} className='card' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <CardActionArea>
        <CardMedia
          className="cardmedia"
          component="img"
          height="250"
          sx={{
            "objectFit":"contain"
          }}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf7BxSDR3wjaYHl1wC5EXF9TtdAdLoJrlEg&usqp=CAU"     alt="green iguana"
        />
        <CardContent
        >
          <Typography gutterBottom variant="h6" component="div">
            Roadster
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Men Micro Check Formal Shirt <br/>
            Rs 2500 <del style={{padding:'12px',color:"#FF1E00"}}> Rs 3000 </del>  <span style={{"color":"green"}}> (20%off)  </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          view detail
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid  justifyContent='center' item xs={'12'} sx={{display:'flex'}} sm={'6'} md={'3'}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <CardActionArea>
        <CardMedia
         className="cardmedia"
          component="img"
          height="250"
          sx={{
            "objectFit":"contain"
          }}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf7BxSDR3wjaYHl1wC5EXF9TtdAdLoJrlEg&usqp=CAU"     alt="green iguana"
        />
        <CardContent
        >
          <Typography gutterBottom variant="h6" component="div">
            Roadster
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Men Micro Check Formal Shirt <br/>
            Rs 2500 <del style={{padding:'12px',color:"#FF1E00"}}> Rs 3000 </del>  <span style={{"color":"green"}}> (20%off)  </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          view detail
        </Button>
      </CardActions>
    </Card>

    </Grid>
    <Grid  justifyContent='center' sx={{display:'flex'}} item xs={'12'} sm={'6'} md={'3'}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <CardActionArea>
        <CardMedia
        className="cardmedia"
          component="img"
          height="250"
          sx={{
            "objectFit":"contain"
          }}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf7BxSDR3wjaYHl1wC5EXF9TtdAdLoJrlEg&usqp=CAU"     alt="green iguana"
        />
        <CardContent
        >
          <Typography gutterBottom variant="h6" component="div">
            Roadster
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Men Micro Check Formal Shirt <br/>
            Rs 2500 <del style={{padding:'12px',color:"#FF1E00"}}> Rs 3000 </del>  <span style={{"color":"green"}}> (20%off)  </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          view detail
        </Button>
      </CardActions>
    </Card>

    </Grid>
    <Grid  justifyContent='center' sx={{display:'flex'}} item xs={'12'} sm={'6'} md={'3'}>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <CardActionArea>
        <CardMedia
        className="cardmedia"
          component="img"
          height="250"
          sx={{
            "objectFit":"contain"
          }}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf7BxSDR3wjaYHl1wC5EXF9TtdAdLoJrlEg&usqp=CAU"     alt="green iguana"
        />
        <CardContent
        >
          <Typography gutterBottom variant="h6" component="div">
            Roadster
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Men Micro Check Formal Shirt <br/>
            Rs 2500 <del style={{padding:'12px',color:"#FF1E00"}}> Rs 3000 </del>  <span style={{"color":"green"}}> (20%off)  </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          view detail
        </Button>
      </CardActions>
    </Card>

    </Grid>
    </Grid>
  );
}
