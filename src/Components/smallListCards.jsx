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
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardImage from "./cardImage";

export default function SmallListCard({ locationText, CardImage }) {
  return (
    <Card className="small-list-card-2" sx={{ display: 'flex', flexDirection: 'column', margin: '10px', flex: '1 1 auto' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={CardImage}
        title="house"
      />
      <CardContent sx={{ flexGrow: 1, paddingBottom: "0px" }}>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
          <Typography color='#325098' fontWeight="700" fontSize="15px" textAlign="justify" className="price">
            $ 546,009
          </Typography>
          <div className="price">
            <CiHeart />
          </div>
        </div>
        <Typography variant="h6" fontSize="12.46px" textAlign='left' className="price">4 BHK Apartments</Typography>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'center' }}>
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
  );
}























// import "../App.css";
// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CiHeart } from "react-icons/ci";
// import { CiLocationOn } from "react-icons/ci";
// import LivingRoomImg from "../assets/Livingarea.png";
// import BedroomImg from "../assets/Bedrooms.png";
// import BathroomImg from "../assets/BathroomIcon.png";
// import Grid from '@mui/material/Grid';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import CardImage from "./cardImage";

// export default function SmallListCard({ locationText, CardImage }) {
//   return (
//     <Card sx={{ display: 'flex', flexDirection: 'column', margin: '10px', maxWidth: "200px" }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={CardImage}
//         title="house"
//       />
//       <CardContent sx={{ flexGrow: 1, paddingBottom: "0px" }}>
//         <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
//           <Typography color='#325098' fontWeight="700" fontSize="15px" textAlign="justify" className="price">
//             $ 546,009
//           </Typography>
//           <div className="price">
//             <CiHeart />
//           </div>
//         </div>
//         <Typography variant="h6" fontSize="12.46px" textAlign='left' className="price">4 BHK Apartments</Typography>
//         <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'center' }}>
//           <CiLocationOn style={{ height: '12px', width: '12px' }} />
//           <Typography variant="caption" style={{ fontSize: '9px', marginTop: '2px' }}>{locationText}</Typography>
//         </div>
//         <Typography className="text"
//           sx={{
//             fontSize: { xs: '10px', sm: '12px' },
//             color: 'text.secondary',
//             marginTop: '5px',
//             overflowWrap: 'break-word',
//             whiteSpace: 'normal',
//             wordBreak: 'break-word',
//           }}
//         >
//           Excellent romantic hotel, closest to restaurants, bars, and public transportation
//         </Typography>
//         <div className="icons" style={{ display: "flex", justifyContent: "space-around", fontSize: "10px", marginTop: "10px" }}>
//           <div style={{ color: "#325098", textAlign: "center" }}>
//             <div style={{ display: "flex", gap: "6px", justifyContent: "center", alignItems: "center" }}>
//               <img src={BedroomImg} alt="" />3
//             </div>
//             Bedrooms
//           </div>
//           <div style={{ color: "#325098", textAlign: "center" }}>
//             <div style={{ display: "flex", gap: "6px", justifyContent: "center", alignItems: "center" }}>
//               <img src={BathroomImg} alt="" />2
//             </div>
//             Bathroom
//           </div>
//           <div style={{ color: "#325098", textAlign: "center" }}>
//             <div style={{ display: "flex", gap: "6px", justifyContent: "center", alignItems: "center" }}>
//               <img src={LivingRoomImg} alt="" />620
//             </div>
//             Living Area
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }