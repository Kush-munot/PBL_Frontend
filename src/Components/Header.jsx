import * as React from "react";
import {
    AppBar,
    Grid,
    Typography,
    Button,
    List,
    Box,
    Divider,
    Toolbar,
    Drawer,
    Link
} from "@mui/material";
// import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const btn = {
    mx: 1,
    color: "black",
    backgroundColor: "transparent",
    height: "40px",
    borderRadius: '10px',
    textTransform: 'none',
    fontSize: '16px',
    "&:hover": {
        backgroundColor: "#915831",
        color: "white",
    },
};
const styles = {
    AppBar: {
        backgroundColor: "#E5E5E5",
        width: "100%",
        height: "auto",
        py: "1px",
    },
    logo: {
        width: "50px",
        height: "50px",
        px: 1,
    },
    menutext: {
        fontStyle: "Nunito Sans",
        fontWeight: 500,
        fontSize: "18px",
        textTransform: "none",
        // lineHeight: "29px",
        color: "#000000",
    },
    btn: {
        my: 2,
        color: "hsl(235, 16%, 14%)",
        mx: 1,
        width: "100%",
        borderRadius: '10px',

        "&:hover": {
            color: "black",
            borderBottom: "3px solid hsl(235, 16%, 14%)",
            borderRadius: "10px",
        },
    },
};

/* const buttons = ["Leaderboard", "Login", "CollegeWit"];
const links = ["/leaderboard", "/login", "https://collegewit.netlify.app/"]; */

const data = [
    {
        title: "Leaderboard",
        link: '/leaderboard'
    },
    {
        title: "Register",
        link: '/register'
    },
    {
        title: "Edit Profile",
        link: '/editDetails'
    },
    {
        title: "Report",
        link: '/report'
    },
    {
        title: "CollegeWit",
        link: 'https://collegewit.netlify.app/'
    },
]

export default function Appbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", m: 2 }}>

            <Divider />
            <List>
                {data.map((item) => (
                    <Link href={item.link} style={{ textDecoration: "none" }} key={item}>
                        {/* <ListItem key={item} disablePadding> */}
                        <Button sx={{ textAlign: "center" }}>
                            {/* <ListItemText> */}
                            <Typography sx={styles.menutext}>{item.title}</Typography>
                            {/* </ListItemText> */}
                        </Button>
                        <br />
                        {/* </ListItem> */}
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Grid container>
            <AppBar
                component="nav"
                position="fixed"
                sx={{
                    backgroundColor: "transparent",
                    height: "auto",
                    boxShadow: "none",
                }}
            >
                <Toolbar
                    sx={{
                        m: 2,
                        backgroundColor: "#FAFAFF",
                        borderRadius: "10px",
                        py: 1,
                        boxShadow: "1px 1px 1px 1px #DADDD8",
                    }}
                >
                    {/* Drawer for Mobile View */}

                    <Button
                        onClick={handleDrawerToggle}
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                sm: "flex",
                                md: "none",
                                lg: "none",
                                xl: "none",
                            },
                            color: "black",
                        }}
                    >
                        <Grid container xs={12}>
                            <Grid item xs={1}>
                                <MenuIcon />
                            </Grid>
                        </Grid>
                    </Button >
                    <Grid>
                        <a href='/'  style={{ textDecoration: "none", color: "black" }}>
                            <Grid xs={11} sx={{display: { md: "none" }, alignItems:'center'}}>
                                <Typography
                                    sx={{
                                        color: "#915831",
                                        fontWeight: 600,
                                        fontFamily: 'Blanka',
                                        fontSize: '25px',
                                        letterSpacing: '2px',
                                        width: "380px",
                                    }}
                                >
                                    Indian Coderz
                                </Typography>
                            </Grid>
                        </a>
                    </Grid>

                    {/* ------------ Desktop -------------- */}

                    <Grid
                        container
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            display: { xs: "none", sm: "none", md: "flex" },
                        }}
                    >
                        <a href="/" style={{ textDecoration: "none", color: "black" }}>
                            <Grid
                                container
                                xs={12}
                                sx={{
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                {/* <img src={logo} alt="logo" style={{ height: "50px" }} /> */}
                                <Typography
                                    sx={{
                                        color: "#915831",
                                        fontWeight: 600,
                                        fontSize: 30,
                                        fontFamily: 'Blanka',
                                        letterSpacing: '2px',
                                        ml: 2,
                                    }}
                                >
                                    Indian Coderz
                                </Typography>
                            </Grid>
                        </a>

                        <Grid sx={{ marginLeft: '29%' }}>
                            {data.map((button) => (
                                <Link
                                    href={button.link}
                                    key={button}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    <Button sx={btn}>{button.title}</Button>
                                </Link>
                            ))}

                        </Grid>

                        <Box component="nav">
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: "block", sm: "block" },

                                    "& .MuiDrawer-paper": {
                                        boxSizing: "border-box",
                                        width: 240,
                                    },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid >
    );
}
