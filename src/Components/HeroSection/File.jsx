import  { useState } from 'react';
import { Button, Grid, Input, Typography } from '@mui/material';
import axios from 'axios';
import Reveal from '../Animation/Reveal';

const FileUploadExample = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState({ name: '', numberPlate: '' });

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const uploadFile = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await axios.post('http://localhost:3000/upload', formData);

                // Update the state with the received data
                setData({
                    name: response.data.lastTwoValues[0],
                    numberPlate: response.data.lastTwoValues[1],
                });
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            alert('Please choose a file before uploading.');
        }
    };

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

    return (
        <div id='try'>
            <Grid container spacing={2}>
                <Grid item lg={8} md={8} xs={12} align="center">
                    <Reveal>
                        {/* <Typography sx={heroText}>Unlock Your <Typography style={heroTextBig}>Coding Potential</Typography></Typography> */}
                        <div>
                            <Typography sx={heroTextBig}>
                                Try The Model Demo Now !!
                            </Typography>

                        </div>
                    </Reveal>
                </Grid>
                <Grid item lg={8} md={8} xs={12} align="center">
                    <Input type="file" id="fileInput" onChange={handleFileChange} />
                    <br />
                    <Button variant="contained" color="success" onClick={uploadFile} sx={{ marginTop: '20px' }} >
                        Upload
                    </Button>
                </Grid>
                <Grid item lg={4} md={4} xs={12} align="center">
                    <Typography variant="body1">
                        {data.name && `Name: ${data.name}`}
                    </Typography>
                    <Typography variant="body1">
                        {data.numberPlate && `Number Plate: ${data.numberPlate}`}
                    </Typography>
                </Grid>
            </Grid>
        </div >
    );
};

export default FileUploadExample;
