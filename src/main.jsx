import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import TVshows from "./Components/TVshows/TVshows";
import SignIn from "./Components/SignIn/SignIn";
import Page404 from "./Components/Page404/Page404";
import AuthProvider, { AuthContext } from "./Components/Firebase/AuthProvider";
import SignUp from "./Components/SignUp/SignUp";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import PrivateRoutes from "./routes/PrivateRoutes";
import MoviesSynopsis from "./Components/MovieSynopsis/MoviesSynopsis";
import FavouriteTvShows from "./Components/FavouriteTvShows/FavouriteTvShows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
      {
        path: "/TvShows",
        element: <TVshows></TVshows>,
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/movieSynopsis",
        element: (
          <PrivateRoutes>
            <MoviesSynopsis></MoviesSynopsis>
          </PrivateRoutes>
        ),
      },
      {
        path: "/favouriteTvShows",
        element: (
          <PrivateRoutes>
            <FavouriteTvShows></FavouriteTvShows>
          </PrivateRoutes>
        ),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("../movie.json"),
      },
      {
        path: "/404",
        element: <Page404></Page404>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
