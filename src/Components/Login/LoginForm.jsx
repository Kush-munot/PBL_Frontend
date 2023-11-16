import { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'

import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";

import {collegeData} from './collegeData'


const headerStyle = {
    marginBottom: '20px',
    fontFamily: "Blanka",
    fontSize: 24,
    fontWeight: 800,
    letterSpacing: '10px',
    background: "-webkit-linear-gradient(45deg, #FF3366 30%, #FF9933 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
};
const paperStyle = {
    p: 2,
    width: "50%",
    m: "0 auto",
    height: "auto",
    "@media (max-width: 1000px)": {
        width: '90%',
    }
};

const text = { padding: 2, margin: "5px 0" };

const buttons = { margin: "8px", color: "#fff" };



const LoginForm = () => {

    const [disabled, setDisabled] = useState(true);
    const [disabled1, setDisabled1] = useState(false);

    const [name, setName] = useState("");
    const [college_name, setCollegeName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [codechef_id, setCodechefId] = useState("");
    const [codeforces_id, setCodeforcesId] = useState("");
    const [leetcode_id, setLeetcodeId] = useState("");
    const [github_id, setGithubId] = useState("");
    const [otp, setOtp] = useState("");

    const otpVerification = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/api/v1/verifyOTP`, {
            email,
            otp,
        }).then((res) => {
            { res.data.isvalid ? setDisabled(false) : setDisabled(true) }
            { res.data.isvalid ? setDisabled1(true) : setDisabled(false) }
            {
                res.data.isvalid ?
                    Swal.fire({
                        icon: 'success',
                        title: 'Verified!!',
                        text: `We have Successfully verified the OTP`,
                        showConfirmButton: false,
                        timer: 1500,
                    })
                    :
                    Swal.fire({
                        icon: 'error',
                        title: 'Sorry!!',
                        text: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
            }

        }).catch((err) => {
            console.log(err)
        })

    }

    const sendOtp = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/api/v1/sendOTP`, {
            email,
        }).then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Sent!!',
                text: `Email sent to above entered Email ID`,
                showConfirmButton: false,
                timer: 1500,
            })

        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Sent!!',
                text: `${err.response.data.message}`,
                showConfirmButton: false,
                timer: 1500,
            });
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(college_name)
        axios.post(`${import.meta.env.VITE_API_URL}/api/v1/register`, {
            name,
            email,
            password,
            codechef_id,
            codeforces_id,
            leetcode_id,
            college_name,
            github_id
        }).then((res) => {
            console.log(res)
            Swal.fire({
                icon: 'success',
                title: 'Added!!',
                text: `Data has been Added.`,
                showConfirmButton: false,
                timer: 1500,
            });
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    py: 14,
                    height: "auto",
                }}
            >
                <Paper sx={paperStyle}>
                    <Grid align="center">
                        <Typography style={headerStyle}>
                            Register
                        </Typography>

                    </Grid>

                    <TextField
                        style={text}
                        name="email"
                        required
                        value={email}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={disabled1}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter your Email
                            </Typography>
                        }
                    />
                    <Button
                        style={buttons}
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={sendOtp}
                    >
                        Send OTP on Email
                    </Button>

                    <TextField
                        style={text}
                        name="otp"
                        required
                        value={otp}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        disabled={disabled1}
                        onChange={(e) => setOtp(e.target.value)}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter OTP Sent on your Email
                            </Typography>
                        }
                    />
                    <Button style={buttons}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={otpVerification}
                    >Verify OTP</Button>
                    <br />
                    <br />
                    <TextField
                        style={text}
                        name="name"
                        value={name}
                        required
                        disabled={disabled}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={(e) => setName(e.target.value)}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter your Name
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        name="password"
                        type="password"
                        required
                        disabled={disabled}
                        value={password}
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                        fontFamily="Nunito Sans, sans-serif"
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter your Password
                            </Typography>
                        }
                    />
                    <FormControl sx={{ marginBottom: 1, minWidth: 300 }} disabled={disabled}>
                        <InputLabel
                            sx={{ fontFamily: " Nunito Sans, sans-serif" }}
                            id="demo-simple-select-label"
                        >
                            College Name*
                        </InputLabel>
                        <Select
                            name="college_name"
                            value={college_name}
                            label={
                                <Typography
                                    variant="caption"
                                    fontFamily="Nunito Sans, sans-serif"
                                >
                                    College Name
                                </Typography>
                            }
                            fullWidth
                            fontFamily="Nunito Sans, sans-serif"
                            onChange={(e) => { setCollegeName(e.target.value) }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {collegeData.map((cllg, index) => (
                                <MenuItem key={index + 1} value={cllg.CollegeName}>{cllg.CollegeName}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Typography sx={{ color: 'green' }}><b>*Ping us on Linkedin if your College name is not there. <a href="https://www.linkedin.com/in/kush-munot/">Kush</a> and <a href="https://www.linkedin.com/in/prathamesh-rajbhoj-2bb157200">Pratham</a></b></Typography>
                    <Typography sx={{ color: 'red' }}><b>*NOTE- all four fields - Codechef, CodeForces, Leetcode and Github are compulsory.</b></Typography>
                    <Typography sx={{ color: 'blue' }}><b>If you donot have accounts on the same please create one and then enter them here. Add usernames only not the links</b></Typography>

                    <TextField
                        style={text}
                        name="github"
                        disabled={disabled}
                        required
                        value={github_id}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={(e) => setGithubId(e.target.value)}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter your Github Username
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        name="codehef"
                        required
                        value={codechef_id}
                        disabled={disabled}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={(e) => setCodechefId(e.target.value)}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter your Codechef Username
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        name="codeforces"
                        value={codeforces_id}
                        required
                        disabled={disabled}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={(e) => setCodeforcesId(e.target.value)}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter your Codeforces Username
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        name="leetcode"
                        value={leetcode_id}
                        required
                        disabled={disabled}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={(e) => setLeetcodeId(e.target.value)}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter your Leetcode Username
                            </Typography>
                        }
                    />
                    <br />
                    <Button
                        style={buttons}
                        type="submit"
                        variant="contained"
                        color="success"
                        disabled={disabled}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Paper>

            </Grid>
        </div >
    );
};

export default LoginForm;
