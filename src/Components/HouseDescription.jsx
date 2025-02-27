import { Grid2, Card, CardContent, Typography } from "@mui/material";
import "../App.css"
import { CiLocationOn } from "react-icons/ci";
import bedroomImg from "../assets/Bedrooms.png";
import bathroomImg from "../assets/BathroomIcon.png";
import livingAreaImg from "../assets/Livingarea.png";
import squarefootage from "../assets/squarefootage.png";
import Kitchen from "../assets/Kitchen.png"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import vector from "../assets/Vector.png"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from "react";
import chart from "../assets/Chart.png"
import MediaCard from "./priceCard";
import SmallListCard from "./smallListCards";
import house1 from "../assets/Homeimg1.png";
import house2 from "../assets/home3.png";
import house3 from "../assets/homeimg2.png";
import house4 from "../assets/home4.png";
import house5 from "../assets/Group 136.png";

// import MediaCard from "./priceCard";
// import SmallListCard from "./smallListCards";
// import house1 from "../assets/Homeimg1.png";
// import house2 from "../assets/home3.png";
// import house3 from "../assets/homeimg2.png";
// import house4 from "../assets/home4.png";
// import house5 from "../assets/Group 136.png";

const HouseDescription = ({ DescriptionHead, Descriptionlocation, Description }) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    }
    return (
        <Grid2 container textAlign="left" padding="10px" className="dashboard-content">
            <Grid2 item xs={12} md={9} className="right-content">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <Typography variant="h5"
                            component="h5" style={{ color: "#325098", fontWeight: "700", fontFamily: "urbanist", letterSpacing: "1px" }} > {DescriptionHead}
                        </Typography>
                        <Typography style={{ display: "flex", marginTop: "10px" }} className="locationText"><CiLocationOn />{Descriptionlocation}</Typography>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", fontSize: "10px", marginTop: "30px", alignItems: "flex-end", flexWrap: "wrap" }}>
                    <div style={{ color: "#325098" }}>
                        <div style={{ display: "flex", gap: "6px", color: "#325098", justifyContent: "center", alignItems: "center" }}><img src={bedroomImg} alt="" />03</div>
                        Bedrooms
                    </div>
                    <div style={{ color: "#325098" }}>
                        <div style={{ display: "flex", gap: "6px", color: "#325098", justifyContent: "center", alignItems: "center" }}> <img src={bathroomImg} alt="" />02</div>
                        Bathroom
                    </div>
                    <div style={{ color: "#325098" }}>
                        <div style={{ display: "flex", gap: "6px", color: "#325098", justifyContent: "center", alignItems: "center" }}> <img src={livingAreaImg} alt="" /> 01</div>
                        Living Area
                    </div>
                    <div style={{ color: "#325098" }}>
                        <div style={{ display: "flex", gap: "6px", color: "#325098", alignItems: "center", justifyContent: "center" }}> <img src={squarefootage} alt="" /> 620 ft</div>
                        squarefootage
                    </div>
                    <div style={{ color: "#325098" }}>
                        <div style={{ display: "flex", gap: "6px", color: "#325098", justifyContent: "center", alignItems: "center" }}> <img src={Kitchen} alt="" /> 02</div>
                        Kitchen
                    </div>
                </div>
                <Typography variant="h5" marginTop="20px"
                    component="h5" style={{ fontWeight: "700", fontFamily: "urbanist", letterSpacing: "1px" }} >Description
                </Typography>
                <Typography variant="p"
                    component="p" style={{ fontFamily: "urbanist", color: "#8C8C8C", fontSize: "12px", lineHeight: "1.5" }} > {Description}
                </Typography>
                <div style={{ paddingTop: "30px" }}>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799181496!2d-74.25987571760744!3d40.69767006358627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b60165%3A0x8b621f8a7a7d28a4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633452834502!5m2!1sen!2s"
                        style={{ flex: 1, border: 1 }}
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
                <Typography variant="h5" marginTop="20px"
                    component="h5" style={{ fontWeight: "700", fontFamily: "urbanist", letterSpacing: "1px" }} >Overview
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", fontSize: "10px", marginTop: "30px", alignItems: "flex-end" }}>
                    <Typography variant="p" marginTop="20px"
                        component="p" style={{ fontWeight: "700", fontFamily: "urbanist" }} >Market Growth |
                    </Typography>
                    <Typography variant="p" marginTop="20px" display="flex"
                        component="p" style={{ fontWeight: "700", fontFamily: "urbanist" }} >$ 644.876 <img src={vector} style={{ padding: "4px" }} /> This Month
                    </Typography>
                    <Typography variant="p" marginTop="20px" display="flex"
                        component="p" style={{ fontWeight: "700", fontFamily: "urbanist" }} >$ 1.345 <img src={vector} style={{ padding: "4px" }} /> Last Month
                    </Typography>
                    <Typography>
                    </Typography>
                </div>
                <br />
                <div style={{ paddingTop: "30px" }}>
                    <img src={chart}></img>
                </div>
                <Typography variant="h5" paddingTop="50px"
                    component="h5" style={{ fontWeight: "700", fontFamily: "urbanist", letterSpacing: "1px" }} > Similar Properties For Sale
                </Typography>
            </Grid2>
            <Grid2 xs={6} md={2} lg={1} className="priceTag" size={4}>
                <MediaCard ></MediaCard>
            </Grid2>
            <Grid2 container spacing={1} className="small-list-card-container">
                <Grid2 item xs={12} sm={6} md={2} lg={2} className="small-list-card">
                    <Box>
                        <div style={{ whiteSpace: "nowrap", paddingBottom: "10px" }}>
                            <Grid2 container spacing={0} style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                                <SmallListCard locationText="2913 Frank Avenue Springfield, 01105" CardImage={house1} />
                                <SmallListCard locationText="2913 Golden Horizon Apartments, 01106" CardImage={house3} />
                                <SmallListCard locationText="2913 Frank Avenue Springfield, 01107" CardImage={house2} />
                                <SmallListCard locationText="2913 Sams Avenue Springfield, 01108" CardImage={house4} />
                                {/* <SmallListCard locationText="2913 Frank Avenue Springfield, 01105" CardImage={house5} /> */}
                            </Grid2>
                        </div>
                    </Box>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}
export default HouseDescription;