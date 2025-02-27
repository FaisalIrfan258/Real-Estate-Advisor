import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import houseimg from "../assets/Homeimg1.png"

export default function MediaCard() {
  return (
    <Card sx={{ width: "max-content", marginTop:"0px"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Price
        </Typography>
        <Typography variant="h6" component="h6" sx={{ color: '#325098' }}> $546,099 
          <span style={{color:"#ccc"}}>/month</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" style={{background:"#325098", color:"#fff", width:"maxWidth"}}>Reserve Now</Button>
      </CardActions>
    </Card>
  );
}
