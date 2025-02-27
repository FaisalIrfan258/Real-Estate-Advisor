import ListCard from "./ListCard";
import { Grid, Box, Typography } from "@mui/material";
import CardImage from "./cardImage";
import image1 from "../assets/Rectangle 100.png";
import image12 from "../assets/Group 139.png";
import image3 from "../assets/Rectangle 101.png";
import HouseDescription from "./HouseDescription";
import house1 from "../assets/Homeimg1.png";
import house2 from "../assets/home3.png";
import house3 from "../assets/homeimg2.png";
import house4 from "../assets/home4.png";
import house5 from "../assets/Group 136.png";
import "../App.css";
import DashboardLayoutSlots from "./dashboardLayout";
import selectVector from "../assets/select-icon.png";

function ListDetail({ displayHouseImages, locationText }) {
    return (
        <DashboardLayoutSlots>
            <div className="dashboard-content">
                <Grid container textAlign="left">
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <Box>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                <Typography style={{ textAlign: "left", fontSize: "26px", padding: "20px" }}>
                                    236 Home in <b>New York</b>
                                </Typography>
                                <img src={selectVector} alt="" srcset="" style={{ height: "20px", marginTop: "30px", paddingRight: "20px" }} />
                            </div>
                            <div style={{ whiteSpace: "nowrap", paddingBottom: "10px", paddingLeft: "2px" }} className="CardsList">
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
                    <Grid item xs={12} sm={12} md={6} lg={7} className="CardsListContent">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "25px" }}>
                                <div>
                                    <CardImage displayHouseImages={image1} style={{ display: "flex", alignItems: "stretch" }} />
                                </div>
                                <div>
                                    <div style={{ display: "flex", flexDirection: "column", margin: "0" }}>
                                        <CardImage displayHouseImages={image12} style={{ height: "100%" }} />
                                        <CardImage displayHouseImages={image3} style={{ height: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <HouseDescription
                                DescriptionHead="Golden Horizon Suites"
                                Descriptionlocation="2913 Frank Avenue Springfield, 01105"
                                Description="Located in a prestigious neighborhood, this stunning villa boasts 6 spacious bedrooms, 7 bathrooms, and a grand lobby with a sweeping staircase. The property features high-end finishes, large windows, and expansive grounds perfect for entertaining. Additional amenities include a private pool, gym, and home theater. Don't miss out on this incredible opportunity to own a piece of luxury!"
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </DashboardLayoutSlots >
    );
}
export default ListDetail;