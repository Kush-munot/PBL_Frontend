import { Grid, Typography } from '@mui/material';
import Reveal from '../Animation/Reveal';
import Lottie from "lottie-react";
import PeopleLottie from '../../assets/People.json'
import File from './File'
import FaceRecog from '../../assets/FaceRecog.json'
import Database from '../../assets/Database.json'
import Secure from '../../assets/Secure.json'
import NumberPlate from '../../assets/NumberPlate.json'
import UserFriendly from '../../assets/UserFriendly.json'
import DualTech from '../../assets/DualTech.json'


const content = [
    {
        text: "Dual Recognition Technology",
        desc: "Our system employs advanced algorithms to simultaneously recognize both the driver's face and the vehicle number plate from a single image, streamlining the data entry process.",
        animation: DualTech
    },
    {
        text: "Efficient Database Entry",
        desc: "Instantly create database entries with accurate and verified information, enhancing the speed and efficiency of your record-keeping process.",
        animation: Database
    },
    {
        text: "Facial Recognition",
        desc: "Utilizing cutting-edge facial recognition technology, our system ensures secure and reliable identification of drivers, adding an extra layer of authentication to your records.",
        animation: FaceRecog
    },
    {
        text: "Number Plate Recognition",
        desc: "Accurately capture and interpret vehicle number plates with precision, providing a reliable method for cataloging and organizing vehicle information.",
        animation: NumberPlate
    },
    {
        text: "User-Friendly Interface",
        desc: "A simple and intuitive interface ensures that users can effortlessly navigate the system, making it accessible to all levels of expertise.",
        animation: UserFriendly
    },
    {
        text: "Secure and Compliant",
        desc: "Our system prioritizes data security and complies with industry standards, providing you with peace of mind regarding the confidentiality and integrity of your records.",
        animation: Secure
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
    marginBottom: '20px',
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


const HeroLanding = () => {

    return (
        <div >
            <Grid container spacing={2} sx={{ my: 22, height: '50vh' }}>
                <Grid item lg={8} md={8} xs={12} align="center">
                    <Reveal>
                        {/* <Typography sx={heroText}>Unlock Your <Typography style={heroTextBig}>Coding Potential</Typography></Typography> */}
                        <div>
                            <Typography sx={heroTextBig}>
                                Empowering Smart Mobility&ensp;
                            </Typography>
                            <Typography sx={heroText}>
                                Where Pytesseract Precision Meets Face Recognition Finesse
                            </Typography>
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
            <div id='features'></div>
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
                <Grid container spacing={2} sx={{ my: 1 }} key={index}>
                    <Grid item lg={8} md={8} xs={12} align="center">
                        <Reveal>
                            <Typography sx={paraTitle}>{data.text}</Typography>
                            <Typography sx={paraText}>{data.desc}</Typography>
                        </Reveal>

                    </Grid>
                    <Grid lg={4} md={4} xs={12}>
                        <Reveal>
                            <Lottie animationData={data.animation} style={{ height: '250px' }} />
                        </Reveal>
                    </Grid>
                </Grid>
            ))}

            <File />

        </div >
    )
}

export default HeroLanding




