import { useEffect, useState } from 'react';
import { Typography, Grid, Link, Button } from '@mui/material';
import { generateConfetti } from "../../utils/generateConfitii";
import TopCard from './TopCard';
import Tables from './TableData';
import axios from "axios";
import DemoFilter from './demoFilter';
import RanklistButtons from './RanklistButtons';
/* import Table from './Table'; */

const Heading = () => {


    function formatDateToHumanReadable(dateTimeString) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };

        const date = new Date(dateTimeString);
        const formattedDate = date.toLocaleString('en-US', options);

        return formattedDate.replace(
            /(\d{1,2})\/(\d{1,2})\/(\d{4}), (\d{1,2}):(\d{2}):(\d{2}) (AM|PM)/,
            (match, day, month, year, hour, minute, second, period) => {
                const daySuffix =
                    day === '1' || day === '21' || day === '31'
                        ? 'st'
                        : day === '2' || day === '22'
                            ? 'nd'
                            : day === '3' || day === '23'
                                ? 'rd'
                                : 'th';
                const formattedTime = `${hour}:${minute}:${second} ${period}`;
                console.log(`${day}${daySuffix} ${month} ${year} at ${formattedTime}`)
                return `${day}${daySuffix} ${month} ${year} at ${formattedTime}`;
            }
        );
    }

    const [myData, setMyData] = useState([]);
    const [time, setTime] = useState("");

    const getMyPostData = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/leaderboard/total`);
            setMyData(res.data.data);
            setTime(formatDateToHumanReadable(res.data.updatedAt))
        } catch (error) {
            console.log(error.message);
        }
    };


    useEffect(() => {
        getMyPostData();
        generateConfetti();
    }, []);

    return (
        <Grid
            sx={{
                position: 'relative',
                my: 12,
                mx: 'auto',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                lg: { mx: 8 },
                sm: { mx: 2 },
            }}
        >

            <Typography
                variant="h2"
                sx={{
                    my: 1.5,
                    pt: 0,
                    px: 2,
                    pb: 2,
                    fontFamily: 'Blanka',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    background: "-webkit-linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: '4px',
                    borderRadius: '8px',
                    md: { fontSize: '1rem' },
                }}
            >
                CP and Dev Leaderboard
            </Typography>
            <Typography
                variant="h4"
                sx={{
                    my: 1,
                    fontFamily: 'Nunito Sans',
                    fontSize: '30px',
                    fontWeight: 'medium',
                    color: 'lightblack',
                    letterSpacing: 'wide',
                }}
            >
                Check your rank here!
            </Typography>
            <Typography
                variant="p"
                sx={{
                    my: 1,
                    fontFamily: 'Nunito Sans',
                    fontSize: '20px',
                    fontWeight: 'medium',
                    color: 'lightblack',
                    letterSpacing: 'wide',
                }}
            >
                Last updated on: {time}
                <span
                    style={{
                        mx: 0.5,
                        fontFamily: 'Nunito Sans',
                        fontWeight: 'bold',
                        color: 'primarydark',
                        fontStyle: 'italic',
                    }}
                >

                </span>
            </Typography>
            <br />
            <Typography
                variant="p"
                sx={{
                    my: 1,
                    fontFamily: 'Nunito Sans',
                    fontSize: '20px',
                    fontWeight: 'medium',
                    color: 'red',
                    letterSpacing: 'wide',
                }}
            >
                <marquee width="50%" direction="left">*NOTE - This Website Leaderboard updates in every 24 hours</marquee></Typography>

            <Grid
                md={12}
            >
                <TopCard datas={myData} />

                <Tables datas={myData} link={`${import.meta.env.VITE_API_URL}/api/v1/leaderboard/total`} />
                
                <Link sx={{ margin: '0x 0px' }} href='/report'>
                    <Button sx={{
                        background: "linear-gradient(to right, #ff416c, #ff4b2b)",
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
                    }}>
                        Report Fake User
                    </Button>
                </Link>
            </Grid>

        </Grid>
    );
};

export default Heading;
