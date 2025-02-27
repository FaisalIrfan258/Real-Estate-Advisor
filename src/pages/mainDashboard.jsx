import "../App.css";
import DashboardLayoutSlots from "../Components/dashboardLayout";
import ListCard from "../Components/ListCard";
import { Box, Grid, Typography } from "@mui/material";
import house1 from "../assets/Homeimg1.png";
import house2 from "../assets/home3.png";
import house3 from "../assets/homeimg2.png";
import house4 from "../assets/home4.png";
import house5 from "../assets/Group 136.png";

function MainDashboard() {
    return (
        <div>
            <DashboardLayoutSlots>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <Typography style={{ textAlign: "left", fontSize: "26px", padding: "20px" }}>
                        236 Home in <b>New York</b>
                    </Typography>
                </div>
                <Grid container textAlign="left">
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <Box>
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
                    <Grid item xs={12} sm={12} md={12} lg={6} className="CardsListContent">
                        <Box>
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
                </Grid>
            </DashboardLayoutSlots>
        </div>
    );
}
export default MainDashboard; 