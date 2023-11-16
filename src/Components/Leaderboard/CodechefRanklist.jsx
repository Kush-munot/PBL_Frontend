import Footer from '../Footer'
import Header from '../Header'
import TableData from './TableData'
import { Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { generateConfetti } from "../../utils/generateConfitii";
import axios from 'axios'
import RanklistButtons from './RanklistButtons';

const CodechefRanklist = () => {
  const [myData, setMyData] = useState([]);

  const getMyPostData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/leaderboard/codechef`);
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
            background: "-webkit-linear-gradient(45deg, #603813, #b29f94)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Codechef Ranklist
        </Typography>
      </Grid>
      <TableData datas={myData} type="codechef" link={`${import.meta.env.VITE_API_URL}/api/v1/leaderboard/codechef`} />
      <Footer />
    </div>
  )
}

export default CodechefRanklist