import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Hero from "./Components/HeroSection/Hero";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import LeetcodeRanklist from './Components/Leaderboard/LeetcodeRanklist';
import CodechefRanklist from './Components/Leaderboard/CodechefRanklist';
import CodeforcesRanklist from './Components/Leaderboard/CodeforcesRanklist';
import Report from './Components/Report/Report'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={< Hero />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="register" element={<Login />} />
      <Route path="editDetails" element={<Register/>} />
      <Route path="/leetcode-ranklist" element={<LeetcodeRanklist/>} />
      <Route path="/codechef-ranklist" element={<CodechefRanklist/>} />
      <Route path="/codeforces-ranklist" element={<CodeforcesRanklist/>} />
      <Route path="/report" element={<Report/>} />

    </Route>

  )
)

function App() {

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />

    </>
  )
}

export default App
