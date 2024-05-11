import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./ErroPage/NotFound";
import LayOut from "./LayOut";
import Home from "./Home/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import AllQueries from "./AllQueries/AllQueries";
import RecomendedForMe from "./RecomendedForMe/RecomendedForMe";
import MyQueries from "./MyQueris/MyQueries";
import MyRecomendetion from "./MyRecomendation/MyRecomendetion";

const AllRoutes = () => {
  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement: <NotFoundPage></NotFoundPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },

        {
          path: "/queris",
          element: <AllQueries></AllQueries>,
        },

        {
          path: "/recomendationsForMe",
          element: <RecomendedForMe></RecomendedForMe>,
        },

        {
          path: "/myQueries",
          element: <MyQueries></MyQueries>,
        },

        {
          path: "/myRecomendation",
          element: <MyRecomendetion></MyRecomendetion>,
        },
      ],
    },
  ]);
  return Routes;
};

export default AllRoutes;
