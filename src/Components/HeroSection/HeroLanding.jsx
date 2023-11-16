import { Button, Grid, Link, Typography } from '@mui/material';
import Reveal from '../Animation/Reveal';
import Lottie from "lottie-react";
import PeopleLottie from '../../assets/People.json'
import CommunityEngagement from '../../assets/CommunityEngagement.json'
import Insights from '../../assets/Insights.json'
import RealtimeUpdates from '../../assets/RealtimeUpdates.json'
import UnifiedLeaderboard from '../../assets/UnifiedLeaderboard.json'
import UserFriendly from '../../assets/UserFriendly.json'

const content = [
    {
        text: "Unified Leaderboard",
        desc: "Join Indian Coderz to witness the power of consolidation! Our platform gathers your rankings from Codechef, Codeforces, and Leetcode, presenting you with a unified leaderboard to track your progress and compete with the best.",
        animation: UnifiedLeaderboard,
    },
    {
        text: "Real-time Updates",
        desc: "Stay in the loop with live updates. We fetch the latest data from multiple coding platforms in every 24 hours, ensuring you're always up to date with your performance and rankings.",
        animation: RealtimeUpdates,
    },
    {
        text: "Personalized Insights",
        desc: "Get deep insights into your coding journey. Our platform helps you analyzes your prepration with your peers, and help you improve your skills and climb the leaderboard.",
        animation: Insights,
    },
    {
        text: "Community Engagement",
        desc: "Connect with like-minded coders, share your achievements, and collaborate on challenging problems. Our active community is here to support your coding endeavors.",
        animation: CommunityEngagement,
    },
    {
        text: "User-friendly Interface",
        desc: "Our intuitive design makes navigating the platform a breeze. Whether you're a beginner or a seasoned coder, Indian Coderz is designed with you in mind.",
        animation: UserFriendly,
    },
]


const heroText = {
    fontFamily: 'Blanka',
    fontSize: 24,
    fontWeight: 600,
    background: "hsl(235, 16%, 14%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: '0.2rem',
    "@media (max-width: 1000px)": {
        fontSize: 12
    }
}
const heroTextBig = {
    fontFamily: 'Blanka',
    fontSize: 48,
    fontWeight: 700,
    background: "-webkit-linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: '0.2rem',
    "@media (max-width: 1000px)": {
        fontSize: 22
    }
}
const paraText = {
    fontFamily: 'Nunito Sans',
    fontSize: 22,
    fontWeight: 500,
    margin: '2rem',
    color: "hsl(235, 16%, 14%)",
    "@media (max-width: 1000px)": {
        fontSize: 18
    }
}
const paraTitle = {
    fontFamily: 'Blanka',
    fontSize: 28,
    fontWeight: 600,
    background: "-webkit-linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: '0.2rem',
    "@media (max-width: 1000px)": {
        fontSize: 18
    }
}
const buttonText = {
    fontFamily: 'Blanka',
    fontSize: 28,
    fontWeight: 600,
    background: "white",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: '0.2rem',
    "@media (max-width: 1000px)": {
        fontSize: 18
    }
}
const button1Text = {
    fontFamily: 'Blanka',
    fontSize: 16,
    fontWeight: 600,
    background: "white",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: '0.2rem',
    "@media (max-width: 1000px)": {
        fontSize: 10
    }
}

const HeroLanding = () => {

    return (
        <div>
            <Grid container spacing={2} sx={{ my: 22, height: '50vh' }}>
                <Grid item lg={8} md={8} xs={12} align="center">
                    <Reveal>
                        {/* <Typography sx={heroText}>Unlock Your <Typography style={heroTextBig}>Coding Potential</Typography></Typography> */}
                        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
                            <Typography sx={heroText}>
                                Unlock Your&ensp;
                            </Typography>
                            <Typography sx={heroTextBig}>
                                Coding Potential
                            </Typography>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>

                            <Typography sx={heroText}>with&ensp;</Typography> <Typography sx={heroTextBig}>Indian Coderz&ensp;</Typography> <Typography sx={heroText}>  and</Typography>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
                            <Typography sx={heroTextBig}>Rise&ensp;</Typography> <Typography sx={heroText}>Above the </Typography> <Typography sx={heroTextBig}> &ensp;Rest</Typography>
                        </div>
                    </Reveal>

                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <Reveal>
                        <Lottie animationData={PeopleLottie} />
                    </Reveal>
                </Grid>
            </Grid>
            {/* FEATURES SECTION */}
            <Grid container spacing={2} >
                <Grid item lg={12} md={12} xs={12} align="center">
                    <Reveal>
                        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>

                            <Typography sx={heroTextBig}>Unique Features</Typography>
                        </div>
                    </Reveal>
                </Grid>
            </Grid>
            {content.map((data, index) => (
                <Grid container spacing={2} sx={{ my: 2 }} key={index}>
                    <Grid item lg={8} md={8} xs={12} align="center">
                        <Reveal>
                            <Typography sx={paraTitle}>{data.text}</Typography>
                            <Typography sx={paraText}>{data.desc}</Typography>
                            {data.text == "Community Engagement" ? <Link href="https://chat.whatsapp.com/ExSdgtdV06y04cJzawmdft">
                                <Button sx={{
                                    background: "linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
                                    borderRadius: "5px",
                                    border: 0,
                                    textTransform: 'none',
                                    padding: "15px",
                                    boxShadow: "0 3px 5px 2px rgba(255, 51, 102, 0.3)",
                                    transition: "box-shadow 0.3s ease-in-out",
                                    "&:hover": {
                                        boxShadow: "0 6px 10px 4px rgba(255, 51, 102, 0.3)",
                                    },
                                }}>
                                    <Typography sx={button1Text}>

                                        Join Our Community Group
                                    </Typography></Button>
                            </Link> : <p></p>}
                        </Reveal>

                    </Grid>
                    <Grid lg={4} md={4} xs={12}>
                        <Reveal>
                            <Lottie animationData={data.animation} style={{ height: '300px' }} />
                        </Reveal>
                    </Grid>
                </Grid>
            ))}

            <Grid container spacing={2} >
                <Grid item lg={12} md={12} xs={12} align="center">
                    <Reveal>
                        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
                            <Typography sx={heroText}>Ready to&ensp;</Typography> <Typography sx={heroTextBig}>Dominate the Coding World?</Typography>
                        </div>
                    </Reveal>
                </Grid>
                <Grid item lg={12} md={12} xs={12} align="center">
                    <Reveal>
                        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '20px' }}>
                            <Typography sx={heroTextBig}>Join Us&ensp;</Typography> <Typography sx={heroText}>to Level Up Your</Typography><Typography sx={heroTextBig}>&ensp;Coding Game!</Typography>
                        </div>
                    </Reveal>
                </Grid>
                <Grid item lg={12} md={12} xs={12} align="center">
                    <Reveal>
                        <Link href="/register">
                            <Button sx={{
                                background: "linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
                                borderRadius: "5px",
                                border: 0,
                                textTransform: 'none',
                                padding: "15px",
                                boxShadow: "0 3px 5px 2px rgba(255, 51, 102, 0.3)",
                                transition: "box-shadow 0.3s ease-in-out",
                                "&:hover": {
                                    boxShadow: "0 6px 10px 4px rgba(255, 51, 102, 0.3)",
                                },
                            }}>
                                <Typography sx={buttonText}>

                                    Lets Gooooo !!
                                </Typography>

                            </Button>
                        </Link>
                    </Reveal>
                </Grid>
            </Grid>

        </div >
    )
}

export default HeroLanding