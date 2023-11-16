import { Grid } from '@mui/material';
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActions, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const TopCard = (props) => {
    const firstThreeElements = props.datas.slice(0, 3);

    return (
        <Grid
            container
            xs={12}
            md={12}
            lg={12}
            sm={12}
            justifyContent="center"
            sx={{
                my: "20px",
            }}
        >
            {firstThreeElements.map((row, index) => (
                <Grid
                    key={index}
                    item
                    justifyContent="center"
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    sx={{
                        mx: {
                            xs: "10%",
                            sm: "20%",
                            md: "25%",
                            lg: "0%",
                        },
                    }}
                >

                    <Card
                        key={index + 1}
                        sx={{
                            maxWidth: 400,
                            maxHeight: 500,
                            margin: 2,
                            boxShadow: "2px 5px 5px 2px #b3bfcc",
                            color: "white",
                        }}
                    >
                        <Grid
                            xs={12}
                            container
                            justifyContent="center"
                            sx={{
                                height: "150px",
                                backgroundColor: "hsl(235, 16%, 14%)",
                            }}
                        >
                            <Grid container xs={12} justifyContent="center">
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                        fontFamily: "Nunito Sans, sans-serif",
                                        fontWeight: '600',
                                        textAlign: "center",
                                        borderRadius: "5px",
                                        width: "auto",
                                        background: "linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
                                        my: "10px",
                                        color: "white",
                                        px: 2,
                                        py: "5px",
                                    }}
                                >
                                    {/* Rank {UserData.rank} */}
                                    Rank {index + 1}
                                </Typography>
                            </Grid>

                            <Grid item justifyContent="center">
                                <Avatar
                                    variant="square"
                                    sx={{
                                        position: "relative",
                                        backgroundColor: "#fff",
                                        width: "120px",
                                        height: "120px",
                                        borderRadius: "10%"
                                    }}
                                    alt="Avatar"
                                    src={`https://avatars.githubusercontent.com/${row.github_id}`}
                                />
                            </Grid>
                        </Grid>
                        <CardContent
                            sx={{
                                padding: 2,
                            }}
                        >
                            <Grid container xs={12} justifyContent="center">
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        fontFamily: "Nunito Sans, sans-serif",
                                        fontSize: 20,
                                        color: "#000000",
                                        fontWeight: "bold",
                                        marginTop: "50px",
                                    }}
                                >
                                    {/* {UserData.name} */}
                                    {row.name}
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        fontFamily: "Nunito Sans, sans-serif",
                                        fontSize: 18,
                                        color: "#000000",
                                    }}
                                >
                                    Score : {row.total_score}
                                    {/* Score : {UserData.points} */}
                                </Typography>
                            </Grid>
                            <Divider
                                sx={{
                                    marginTop: "10px",
                                    color: "#000000",
                                }}
                            />
                        </CardContent>
                        <CardActions sx={{ justifyContent: "center" }}>
                            <Link to={`https://github.com/${row.github_id}`}>
                                <Button
                                    size="small"
                                    sx={{
                                        background: "linear-gradient(to right, #000000, #434343);",
                                        color: "white",
                                        "&:hover": {
                                            boxShadow: "2px 5px 5px 2px #b3bfcc",
                                            background: "linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
                                            border: "1px solid black",
                                        },
                                    }}
                                >
                                    <GitHubIcon />
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default TopCard;
