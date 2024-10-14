import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login';
import About from './component/About';
import User from './component/User';
import Cars from './Cars';
import Booking_page from './Booking_page';
import LoginPage from './component/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/Cars",
    element: (
      <>
        <Navbar />
        <Cars/>
      </>
    ),
  },
  {
    path: "/Booking_page",
    element: (
      <>
        <Navbar />
        <Booking_page/>
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/Login",
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;

};


export default App;
