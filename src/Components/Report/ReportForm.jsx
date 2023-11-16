import { useState } from "react";
import React, { useRef } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'

import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
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
const headerTextStyle = {
    marginBottom: '20px',
    fontFamily: "Nunito Sans",
    fontSize: 16,
    fontWeight: 600,
    color: "#000",
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



const ReportForm = () => {

    const [disabled, setDisabled] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [reporter, setReporter] = useState("");
    const [codechef, setCodechefId] = useState("");
    const [codeforces, setCodeforcesId] = useState("");
    const [leetcode, setLeetcodeId] = useState("");
    const [github, setGithubId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/api/v1/report`, {
            name,
            email,
            reporter,
            codechef,
            codeforces,
            leetcode,
            github
        }).then((res) => {
            console.log(res)
            Swal.fire({
                icon: 'success',
                title: 'Reported!!',
                text: `Report has been registered successfully.`,
                showConfirmButton: false,
                timer: 1500,
            });
        }).catch((err) => {
            console.log(err)
        })
    }

    const verification = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/api/v1/login`, {
            email,
            password,
        }).then((res) => {
            console.log(res)
            { res.data.isvalid ? setDisabled(false) : setDisabled(true) }
            { res.data.isvalid ? setReporter(res.data.name) : setReporter("") }
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
        }).catch((err) => {
            console.log(err)
        })
        setDisabled(false);
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
                            Report fake users
                        </Typography>
                        <Typography style={headerTextStyle}>
                            If you find any user using someone else's copmpetitive coding ids you can report here
                        </Typography>

                    </Grid>
                    <TextField
                        style={text}
                        name="email"
                        required
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={e => setEmail(e.target.value)}
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
                        required
                        type="password"
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={e => setPassword(e.target.value)}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter your Password
                            </Typography>
                        }
                    />
                    <Button
                        style={buttons}
                        type="submit"
                        variant="contained"
                        onClick={verification}
                        color="secondary">
                        Verify Credentials
                    </Button>
                    <TextField
                        style={text}
                        required
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={e => setName(e.target.value)}
                        disabled={disabled}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Enter Name of Person who has used fake ID
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        required
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={e => setLeetcodeId(e.target.value)}
                        disabled={disabled}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Leetcode was Fake [Yes/No]
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        required
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={e => setCodechefId(e.target.value)}
                        disabled={disabled}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Codechef was Fake [Yes/No]
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        required
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={e => setCodeforcesId(e.target.value)}
                        disabled={disabled}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Codeforces was Fake [Yes/No]
                            </Typography>
                        }
                    />
                    <TextField
                        style={text}
                        name="github"
                        required
                        fullWidth
                        fontFamily="Nunito Sans, sans-serif"
                        onChange={e => setGithubId(e.target.value)}
                        disabled={disabled}
                        label={
                            <Typography
                                variant="caption"
                                fontFamily="Nunito Sans, sans-serif"
                            >
                                Github was Fake [Yes/No]
                            </Typography>
                        }
                    />

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
                    {/*  </form> */}
                </Paper>

            </Grid>
        </div >
    );
};

export default ReportForm;
