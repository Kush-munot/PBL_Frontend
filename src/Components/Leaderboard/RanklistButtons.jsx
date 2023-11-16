import { Button, Typography, Link } from '@mui/material'
import React from 'react'

const RanklistButtons = () => {
    return (
        <div>
            <Typography variant="h5"
                sx={{
                    fontFamily: 'Nunito Sans',
                    fontSize: '25px',
                    fontWeight: 'medium',
                    color: 'lightblack',
                    letterSpacing: 'wide',
                    margin: '2% 0 4% 0'
                }}
            >Get Ranklist specific to -

                <Link sx={{ margin: '0 10px' }} href="/codechef-ranklist">
                    <Button sx={{
                        background: 'linear-gradient(to right, #603813, #b29f94);',
                        borderRadius: "5px",
                        border: 0,
                        color: "white",
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        padding: "0px 15px",
                        transition: "box-shadow 0.3s ease-in-out",

                    }} > CodeChef </Button>
                </Link>

                <Link sx={{ margin: '0 10px' }} href="/codeforces-ranklist">
                    <Button sx={{
                        background: 'linear-gradient(to right, #0575e6, #021b79);',
                        borderRadius: "5px",
                        border: 0,
                        color: "white",
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        padding: "0px 15px",
                        transition: "box-shadow 0.3s ease-in-out",

                    }} > Codeforces </Button>
                </Link>

                <Link sx={{ margin: '0 10px' }} href="/leetcode-ranklist">
                    <Button sx={{
                        background: 'linear-gradient(to right, #fc4a1a, #f7b733)',
                        borderRadius: "5px",
                        border: 0,
                        color: "white",
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        padding: "0px 15px",
                        transition: "box-shadow 0.3s ease-in-out",

                    }} > Leetcode </Button>
                </Link>

                <Link sx={{ margin: '0 10px' }} href="/leaderboard">
                    <Button sx={{
                        background: 'linear-gradient(to right, #11998e, #38ef7d)',
                        borderRadius: "5px",
                        border: 0,
                        color: "white",
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        padding: "0px 15px",
                        transition: "box-shadow 0.3s ease-in-out",

                    }} > Total Standings </Button>
                </Link>

            </Typography>
        </div>
    )
}

export default RanklistButtons