import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import HouseDescription from './HouseDescription';

export default function CardImage({ displayHouseImages }) {
  return (
    <div>
      <Card sx={{ maxWidth: "fit-content", margin: "5px 7px", borderRadius: "14px" }}>
        {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image={displayHouseImages}
          alt="green iguana"
          sx={{ padding: "0.5px", boxShadow: 1 }}
        />
        {/* </CardActionArea> */}
      </Card>
    </div>
  );
}
