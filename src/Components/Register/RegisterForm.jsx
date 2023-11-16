import { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'



import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography
} from "@mui/material";

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



const RegisterForm = () => {

    const [disabled, setDisabled] = useState(true);
    const [disabled1, setDisabled1] = useState(false);


    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [college_name, setCollegeName] = useState("");
    const [passwordz, setPasswordz] = useState("");
    const [codechef_id, setCodechefId] = useState("");
    const [codeforces_id, setCodeforcesId] = useState("");
    const [leetcode_id, setLeetcodeId] = useState("");
    const [github_id, setGithubId] = useState("");

    const sendOtp = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/api/v1/sendUpdateProfileOTP`, {
            email,
        }).then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Sent!!',
                text: `Email sent to above entered Email ID`,
                showConfirmButton: false,
                timer: 1500,
            });
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

    const otpVerification = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/api/v1/verifyUpdateProfileOTP`, {
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
            { res.data.isvalid ? setCodechefId(res.data.codechef_id) : setCodechefId("") }
            { res.data.isvalid ? setCodeforcesId(res.data.codeforces_id) : setCodeforcesId("") }
            { res.data.isvalid ? setGithubId(res.data.github_id) : setGithubId("") }
            { res.data.isvalid ? setLeetcodeId(res.data.leetcode_id) : setLeetcodeId("") }
            { res.data.isvalid ? setPasswordz(res.data.password) : setPasswordz("") }

        }).catch((err) => {
            console.log(err)
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`${import.meta.env.VITE_API_URL}/api/v1/updateProfile`, {
            codechef_id: codechef_id,
            codeforces_id: codeforces_id,
            leetcode_id: leetcode_id,
            github_id: github_id,
            password: passwordz,
            email: email
        }).then((res) => {
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

    /* const verification = (e) => {
        e.preventDefault();
        axios.post('https://enchanting-gold-goose.cyclic.app/api/v1/login', {
            email,
            password,
        }).then((res) => {
            console.log(res)
            { res.data.isvalid ? setDisabled(false) : setDisabled(true) }
            { res.data.isvalid ? setDisabled1(true) : setDisabled(false) }
            {
                res.data.isvalid ?
                    Swal.fire({
                        icon: 'success',
                        title: 'Verified!!',
                        text: `We have Successfully verified the Credentials`,
                        showConfirmButton: false,
                        timer: 1500,
                    })
                    :
                    Swal.fire({
                        icon: 'error',
                        title: 'Sorry!!',
                        text: `You entered Invalid Credentials`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
            }
            { res.data.isvalid ? setCodechefId(res.data.codechef_id) : setCodechefId("") }
            { res.data.isvalid ? setCodeforcesId(res.data.codeforces_id) : setCodeforcesId("") }
            { res.data.isvalid ? setGithubId(res.data.github_id) : setGithubId("") }
            { res.data.isvalid ? setLeetcodeId(res.data.leetcode_id) : setLeetcodeId("") }
            { res.data.isvalid ? setPasswordz(res.data.password) : setPasswordz("") }
        }).catch((err) => {
            console.log(err)
        })
        // setDisabled(false);
    } */

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
                            Edit Details
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

                    {/* <TextField
                        style={text}
                        name="email"
                        value={email}
                        required
                        disabled={disabled1}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={(e) => setEmail(e.target.value)}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter your Email
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        name="password"
                        type="password"
                        required
                        disabled={disabled1}
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
                    <br />
                    <Button
                        style={buttons}
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={verification}
                    >
                        Verify Credentials
                    </Button> */}
                    <br />

                    <TextField
                        style={text}
                        name="password"
                        required
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        value={passwordz}
                        disabled={disabled}
                        onChange={e => setPasswordz(e.target.value)}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Reset your Password
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        name="github"
                        disabled={disabled}
                        required
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        value={github_id}
                        onChange={e => setGithubId(e.target.value)}
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
                        disabled={disabled}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        value={codechef_id}
                        onChange={e => setCodechefId(e.target.value)}
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
                        required
                        disabled={disabled}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        value={codeforces_id}
                        onChange={e => setCodeforcesId(e.target.value)}
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
                        required
                        disabled={disabled}
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        value={leetcode_id}
                        onChange={e => setLeetcodeId(e.target.value)}
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
                        onClick={handleSubmit}
                        disabled={disabled}
                    >
                        Submit
                    </Button>
                    {/*  </form> */}
                </Paper>

            </Grid>
        </div >
    );
};

export default RegisterForm;
