import { Grid, Typography } from '@mui/material'
import Footer from '../Footer'
import Header from '../Header'
import TableData from './TableData'
import { useEffect, useState } from 'react';
import { generateConfetti } from "../../utils/generateConfitii";
import axios from 'axios'

const LeetcodeRanklist = () => {
  const [myData, setMyData] = useState([]);

  const getMyPostData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/leaderboard/leetcode`);
      setMyData(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
    generateConfetti();
  }, []);
  return (
    <div>
      <Header />
      <Grid align="center">
        <Typography
          sx={{
            marginTop: '120px',
            fontFamily: "Blanka",
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: '10px',
            background: "-webkit-linear-gradient(45deg, #fc4a1a, #f7b733)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          LeetCode Ranklist
        </Typography>
      </Grid>
      <TableData datas={myData} type="leetcode" link={`${import.meta.env.VITE_API_URL}/api/v1/leaderboard/leetcode`} />
      <Footer />
    </div>
  )
}

export default LeetcodeRanklist