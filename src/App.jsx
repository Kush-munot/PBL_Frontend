import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Hero from "./Components/HeroSection/Hero";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={< Hero />} />

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
