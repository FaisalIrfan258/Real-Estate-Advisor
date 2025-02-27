import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import CustomLogo from "../assets/pier-logo 1.svg";
import { GiPlainSquare } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { Footer } from 'antd/es/layout/layout';
import { Account } from '@toolpad/core';
import { FaRegBell } from "react-icons/fa";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "../App.css";
import CustomPriceRange from './slider';
import { CiMap } from "react-icons/ci";
import { Link } from 'react-router-dom';


const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        title: 'Property Type',
        icon: <DashboardIcon />,
        segment: 'propertype',
        children: [
            {
                segment: 'House',
                title: 'House',
            },
            {
                segment: 'Apartment',
                title: 'Apartment',
            }
            , {
                segment: 'Rooms',
                title: 'Rooms',
            }, {
                segment: 'Town House',
                title: 'Town House',
            }
        ],

    },

    {
        segment: 'bedroom',
        title: 'Bedroom',
    }, {
        segment: 'bathroom',
        title: 'Bathroom',
    },
    {
        segment: 'Square footage',
        title: 'Square footage',
        icon: <GiPlainSquare />,
        children: [
            {
                segment: '3 Marla',
                title: '3 Marla',
            },
            {
                segment: '5 Marla',
                title: '4 Marla',
            },
            {
                segment: '7 Marla',
                title: '7 Marla',
            },
            {
                segment: '9 Marla',
                title: '9 Marla',
            },
            {
                segment: '10 Marla',
                title: '10 Marla',
            },

        ],
    },

    {
        segment: 'amenities',
        title: 'Amenities',
        icon: <MdOutlinePool />,
    },

    {
        segment: 'Availability Date',
        title: 'Availability Date',
        icon: <CiCalendarDate />
    },
];


const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    // colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {   
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DemoPageContent({ pathname }) {
    return (
        <Box
            sx={{
                py: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                px: 0

            }}
        >
        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function Search() {
    return (
        <React.Fragment>
            <div className='text-field' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Tooltip title="Search" enterDelay={1000}>
                    <div className='text-field' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <IconButton 
                            aria-label="search"
                            sx={{
                                display: { xs: 'inline', md: 'none' },
                            }}
                        >
                        </IconButton>
                    </div>
                </Tooltip>
                <TextField className='text-field'
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    variant="outlined"
                    size="small"
                    slotProps={{
                        input: {
                            endAdornment: (
                                       <IconButton type="button" aria-label="search" size="small">
                                    <SearchIcon />
                                </IconButton>
                            ),
                            sx: { pr: 0.5 },
                        },
                    }}
                    sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1, pt: 0.5 }}
                />
            </div>
            <Box sx={{ pr: 0.5, pl: 1 }} className="pricerange-button">
                {/* <Typography>Price Range</Typography> */}
                <CustomPriceRange />
            </Box>
            <Box className="nav-buttons"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& > *': {
                        m: 0,
                    },
                    pr: 1,
                    pl: 6
                }}>
                <ButtonGroup aria-label="button group" style={{ padding: "4px", gap: "8px", boxShadow: "none", outline: "none" }} >
                    <Button style={{ borderRadius: "20px" }} className='button-group-header '>Sell</Button>
                    <Button style={{ borderRadius: "20px" }} className='button-group-header'>Rent Property</Button>
                    <Button style={{ borderRadius: "20px" }} className='button-group-header'>Purchase</Button>
                </ButtonGroup>
            </Box>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button type="button" style={{ background: "#E0BAC9", borderRadius: "50%", height: "20px", padding: "15px 12px", display: "flex", justifyContent: "center", alignItems: "center" }}
                    aria-label="ring"
                    sx={{
                        display: { xs: 'inline', md: 'none' },
                    }}
                ><Link to="../map"> <CiMap style={{ height: "20px" }}> </CiMap> </Link>
                </button>
            </div>
            <button type="button"
                aria-label="ring"
                sx={{
                    display: { xs: 'inline', md: 'none' },
                }}
            >
                <FaRegBell />
            </button>
        </React.Fragment>
    );
}

function SidebarFooter({ mini }) {
    return (
        <Typography
            variant="caption"
            sx={{ m: 2, whiteSpace: 'wrap', overflow: 'hidden' }}
        >
        </Typography>
    );
}

SidebarFooter.propTypes = {
    mini: PropTypes.bool.isRequired,
};

function DashboardLayoutSlots({ window, children }) {
    const [session, setSession] = React.useState({
        user: {
            name: 'Aliza Khan',
            email: 'alizaadi2@gmail.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
        },
    });
    const authentication = React.useMemo(() => ({
        signIn: () => {
            setSession({
                user: {
                    name: 'Aliza Khan',
                    email: 'alizaadi2@gmail.com',
                    image: 'https://avatars.githubusercontent.com/u/19550456',
                },
            });
        },
        signOut: () => {
            setSession(null);
        },
    }), []);
    const router = useDemoRouter('/dashboardtwo');
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <AppProvider
            session={session}
            authentication={authentication}
            router={router}
            window={demoWindow}
            navigation={NAVIGATION}
            theme={demoTheme}
            branding={{
                logo: <Link to="/dashboard"><img src={CustomLogo} alt="Custom Logo" style={{ height: '40px', marginRight:"44px", width: 'auto', textAlign: "left" }} /></Link>,
                title: '',
            }}
        >
            <DashboardLayout
            
                defaultSidebarCollapsed={true}
            
            
                slots={{ toolbarActions: Search, sidebarFooter: SidebarFooter }}
            >
            
                <div className="dashboard-layout">
                    <main>{children}</main>
                </div>
            </DashboardLayout>
        </AppProvider>
    );
}

DashboardLayoutSlots.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutSlots;
