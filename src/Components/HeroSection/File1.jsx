// import React, { useState } from 'react';
// import { Button, TextField } from '@material-ui/core';
// import UploadButton from './UploadButton.jsx';
// import { encode, decode } from '../steganography.js';

// export default function File1() {

//     const [option, setOption] = useState('home');

//     function handleClick(event) {

//         const { name } = event.currentTarget;
//         if (name === 'home') {
//             setOption('home');
//             document.getElementById('encoded-image').style.display = 'none';
//         } else if (name === 'encode') {
//             setOption('encode');
//         } else if (name === 'decode') {
//             setOption('decode');
//         }
//     }

//     return (
//         <div className='content'>
//             <h1>IMAGE<span id="word"> STEGO</span></h1>
//             {/* {option === 'home' && <Button style={{ margin: '1rem' }} name='encode' onClick={handleClick} variant="contained">Encode</Button>} */}
//             {option === 'home' && <Button style={{ margin: '1rem' }} name='decode' onClick={handleClick} variant="contained">Upload Image</Button>}
//             {option === 'encode' && <TextField variant="outlined" multiline type="text" id="secret" name="secret" placeholder="Enter secret message" />}
//             {option !== 'home' && <UploadButton />}
//             {/* {option === 'encode' && <Button style={{ margin: '1rem' }} onClick={encode} variant="contained">Encode</Button>} */}
//             {option === 'decode' && <Button style={{ margin: '1rem' }} onClick={decode} variant="contained">Check Now</Button>}
//             {/* {option !== 'home' && <Button style={{ margin: '1rem' }} name='home' onClick={handleClick} variant="contained">Return</Button>} */}
//             {/* <img id="encoded-image" alt='encoded output'></img> */}
//             <canvas id="canvas"></canvas>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import UploadButton from './UploadButton.jsx';
import { encode, decode } from '../middlemware.js';
import Reveal from '../Animation/Reveal.jsx';
import { Typography } from '@mui/material';

export default function File1() {
    const [option, setOption] = useState('home');
    const [decodedMessage, setDecodedMessage] = useState('');

    async function handleClick(event) {
        const { name } = event.currentTarget;
        if (name === 'home') {
            setOption('home');
            document.getElementById('encoded-image').style.display = 'none';
        } else if (name === 'decode') {
            setOption('decode');
            setDecodedMessage(''); // Clear previous decoded message
        }
    }

    async function handleDecode() {
        const decoded = await decode();
        setTimeout(() => {
            setDecodedMessage(decoded);
        }, 4000)
    }

    return (
        <div id='try'>
            <Grid container>
                <Grid lg={12} md={12} xs={12} align="center">
                    <Reveal>
                        {/* <Typography sx={heroText}>Unlock Your <Typography style={heroTextBig}>Coding Potential</Typography></Typography> */}
                        <div>
                            <Typography sx={{
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
                            }} >
                                Try The Model Demo Now !!
                            </Typography>

                        </div>
                    </Reveal>
                </Grid>
                <Grid item lg={12} md={12} xs={12} align="center">

                    <canvas id="canvas" style={{ height: '300px', width: '500px' }}></canvas>
                    <br />
                    {option === 'home' && <Button style={{ margin: '1rem' }} name='decode' onClick={handleClick} variant="contained">Try Now !!</Button>}
                    {option !== 'home' && <UploadButton />}
                    {option === 'decode' && <Button style={{ margin: '1rem' }} onClick={handleDecode} variant="contained">Check Now</Button>}
                    {decodedMessage && <div>{decodedMessage}</div>}
                </Grid>
            </Grid >
        </div>
    );
}

