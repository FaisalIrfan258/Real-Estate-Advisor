import React from "react";
import './dashboard.css';
import background from "../assets/Rectangle 138.png";
import overlayImage1 from "../assets/Ellipse 9.png";       // First overlay image
import overlayImage2 from "../assets/Ellipse 10 (1).png";  // Second overlay image
import dp from "../assets/Ellipse 11.png";
import { Link } from "react-router-dom";                   // Profile image
import group78 from "../assets/Group 78.png";              // Group images
import group73 from "../assets/Group 73.png";
import group72 from "../assets/Group 72.png";
import group74 from "../assets/Group 74.png";
import group75 from "../assets/Group 75.png";
import group76 from "../assets/Group 76.png";
import group77 from "../assets/Group 77.png";
import group79 from "../assets/Group 79.png";
import group81 from "../assets/Group 81.png";
import group82 from "../assets/Group 82.png";
import group83 from "../assets/Group 83.png";
import group80 from "../assets/Group 80.png";
import DashboardLayoutSlots from "../Components/dashboardLayout";
import { Grid, Grid2 , Box, Typography } from "@mui/material";
import image1 from "../assets/Rectangle 100.png";
import image12 from "../assets/Group 139.png";
import image3 from "../assets/Rectangle 101.png";
import house1 from "../assets/Homeimg1.png";
import house2 from "../assets/home3.png";
import house3 from "../assets/homeimg2.png";
import house4 from "../assets/home4.png";
import house5 from "../assets/Group 136.png";
import ListCard from "../Components/ListCard";
import selectVector from "../assets/select-icon.png"
import MapComponent from "../Components/MapComponent";
const DashboardContent = () => {
    return (
        <DashboardLayoutSlots>
            <Grid container textAlign="left">
                <Grid item xs={12} sm={12} md={6} lg={5}>
                    <Box>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography style={{ textAlign: "left", fontSize: "26px", padding: "20px" }}>
                                236 Home in <b>New York</b>
                            </Typography>
                            <img src={selectVector} alt="" srcset="" style={{ height: "20px", paddingRight:"20px", marginTop: "30px" }} />
                        </div>
                        <div style={{ whiteSpace: "nowrap", paddingBottom: "10px" }} className="CardsList">
                            <Grid container spacing={2} style={{ display: "inline-flex" }}>
                                <ListCard locationText="2913 Frank Avenue Springfield, 01105" HouseImage={house1} />
                                <ListCard locationText="2913 Golden Horizon Apartments, 01106" HouseImage={house2} />
                                <ListCard locationText="2913 Frank Avenue Springfield, 01107" HouseImage={house3} />
                                <ListCard locationText="2913 Sams Avenue Springfield, 01108" HouseImage={house4} />
                                <ListCard locationText="2913 Frank Avenue Springfield, 01105" HouseImage={house5} />
                                <ListCard locationText="2913 Frank Avenue Springfield, 01105" HouseImage={house5} />
                                <ListCard locationText="2913 Frank Avenue Springfield, 01105" HouseImage={house5} />
                                <ListCard locationText="2913 Frank Avenue Springfield, 01105" HouseImage={house5} />
                                <ListCard locationText="2913 Frank Avenue Springfield, 01105" HouseImage={house1} />
                                <ListCard locationText="2913 Golden Horizon Apartments, 01106" HouseImage={house2} />
                                <ListCard locationText="2913 Frank Avenue Springfield, 01105" HouseImage={house1} />
                            </Grid>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7} className="CardsListContent ">
                    
                        <MapComponent/>
                    
                </Grid>
            </Grid>
        </DashboardLayoutSlots>
    );
};
export default DashboardContent;
