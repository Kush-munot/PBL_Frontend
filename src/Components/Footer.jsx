

import { Box, Typography, Button, Link } from "@mui/material";


const Footer = () => {
    return (
        <Box
            sx={{
                margin: '7rem 0 0  0',
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'hsl(235, 16%, 14%)'
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    my: 2,
                    fontFamily: 'Blanka',
                    fontSize: '2rem',
                    fontWeight: 'medium',
                    color: 'white',
                    letterSpacing: '3px',
                }}
            >
                Driver Sync
            </Typography>
            
            <Typography
                variant="h4"
                align="center"
                sx={{
                    my: 1,
                    fontFamily: 'Nunito Sans',
                    fontSize: '1.6rem',
                    fontWeight: 'medium',
                    color: 'white',
                    letterSpacing: 'wide',
                }}
            >
                Made with 💚 and 🧠 by <Link sx={{ margin: '0 10px' }} href="https://kushmunot.netlify.app/let's-connect">
                    <Button sx={{
                        background: "linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
                        borderRadius: "5px",
                        border: 0,
                        color: "white",
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        padding: "0px 15px",
                        boxShadow: "0 3px 5px 2px rgba(255, 51, 102, 0.3)",
                        transition: "box-shadow 0.3s ease-in-out",
                        "&:hover": {
                            boxShadow: "0 6px 10px 4px rgba(255, 51, 102, 0.3)",
                        },
                    }} > Kush </Button>
                </Link>
                and
                <Link sx={{ margin: '0 10px' }} href="https://pratham-rajbhoj.netlify.app/">
                    <Button sx={{
                        background: "linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
                        borderRadius: "5px",
                        border: 0,
                        color: "white",
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        padding: "0px 15px",
                        boxShadow: "0 3px 5px 2px rgba(255, 51, 102, 0.3)",
                        transition: "box-shadow 0.3s ease-in-out",
                        "&:hover": {
                            boxShadow: "0 6px 10px 4px rgba(255, 51, 102, 0.3)",
                        },
                    }}>Pratham</Button>
                </Link>
            </Typography>

            
            <Typography
                variant="p"
                sx={{
                    my: 2,
                    fontFamily: 'Nunito Sans',
                    fontSize: '0.9rem',
                    fontWeight: 'semibold',
                    color: 'darkgrey',
                    letterSpacing: 'wide',
                }}
            >
                Copyright © Driver Sync 2023. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;

