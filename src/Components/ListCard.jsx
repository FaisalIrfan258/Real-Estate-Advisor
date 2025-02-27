import "../App.css";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import LivingRoomImg from "../assets/Livingarea.png";
import BedroomImg from "../assets/Bedrooms.png";
import BathroomImg from "../assets/BathroomIcon.png";
import Grid from '@mui/material/Grid';

export default function ListCard({ locationText, HouseImage }) {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} md={12} lg={12} sx={{ paddingRight: 'calc(2 * var(--mui-spacing))', paddingLeft: 0 }}>
      <Card sx={{
        display: 'flex', flexDirection: 'row', margin: '10px', alignItems: 'stretch',
        width: '100%',
        maxWidth: 'auto',  // Ensures it doesn't overflow
        margin: '10px',
        overflow: 'hidden',
        marginRight: '10px',
      }} className="card">
        <CardMedia
          className="Image"
          component="img"
          sx={{ height: "100%", width: '40%', objectFit: 'cover', flexShrink: 0 }}
          image={HouseImage}
          alt="Property Image"
        />
        <CardContent sx={{
          flexGrow: 1, padding: "10px 12px", display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minWidth: 0
        }}>
          <div style={{
            display: 'flex', flexDirection: "row", justifyContent: "space-between",
          }}>
            <Typography color='#325098' fontWeight="700" fontSize="15px" textAlign="justify" className="price">
              $ 546,009
            </Typography>
            <div className="price">
              <CiHeart />
            </div>
          </div>
          <Typography variant="h6" fontSize="12.46px" textAlign='left' className="price">4 BHK Apartments</Typography>
          <div
            style={{
              display: 'flex',
              gap: '3px',
              alignItems: 'center',
              margin: '2px 0',
              flexWrap: 'nowrap' // Prevent wrapping on small screens
            }}>
            <CiLocationOn style={{ height: '12px', width: '12px' }} />
            <Typography variant="caption" style={{ fontSize: '9px', marginTop: '2px' }}>{locationText}</Typography>
          </div>
          <Typography className="text"
            sx={{
              fontSize: { xs: '10px', sm: '12px' },
              color: 'text.secondary',
              marginTop: '5px',
              overflowWrap: 'break-word',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            }}
          >
            Excellent romantic hotel, closest to restaurants, bars, and public transportation
          </Typography>
          <div className="icons" style={{ display: "flex", justifyContent: "space-around", fontSize: "10px", marginTop: "10px" }}>
            <div style={{ color: "#325098", textAlign: "center" }}>
              <div style={{ display: "flex", gap: "6px", justifyContent: "center", alignItems: "center" }}>
                <img src={BedroomImg} alt="" />3
              </div>
              Bedrooms
            </div>
            <div style={{ color: "#325098", textAlign: "center" }}>
              <div style={{ display: "flex", gap: "6px", justifyContent: "center", alignItems: "center" }}>
                <img src={BathroomImg} alt="" />2
              </div>
              Bathroom
            </div>
            <div style={{ color: "#325098", textAlign: "center" }}>
              <div style={{ display: "flex", gap: "6px", justifyContent: "center", alignItems: "center" }}>
                <img src={LivingRoomImg} alt="" />620
              </div>
              Living Area
            </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}