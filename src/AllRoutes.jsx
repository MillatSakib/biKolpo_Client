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
import PrivateRoutes from "./PrivateRoutes/MainPrivateRoutes";
import AuthPrivateRoute from "./PrivateRoutes/AuthPrivateRoute";
import AddQueries from "./AddQueries/AddQueries";
import UpdateQuery from "./UpdateQuery/UpdateQuery";
import QueryDetails from "./QueryDetails/QueryDetails";
import axios from "axios";

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
          element: (
            <AuthPrivateRoute>
              <Login></Login>
            </AuthPrivateRoute>
          ),
        },
        {
          path: "/register",
          element: (
            <AuthPrivateRoute>
              <Register></Register>
            </AuthPrivateRoute>
          ),
        },

        {
          path: "/queris",
          element: <AllQueries></AllQueries>,
        },

        {
          path: "/recomendationsForMe",
          element: (
            <PrivateRoutes>
              <RecomendedForMe></RecomendedForMe>
            </PrivateRoutes>
          ),
        },

        {
          path: "/myQueries",
          element: (
            <PrivateRoutes>
              <MyQueries></MyQueries>
            </PrivateRoutes>
          ),
        },

        {
          path: "/myRecomendation",
          element: (
            <PrivateRoutes>
              <MyRecomendetion></MyRecomendetion>
            </PrivateRoutes>
          ),
        },
        {
          path: "/addQueries",
          element: (
            <PrivateRoutes>
              <AddQueries></AddQueries>
            </PrivateRoutes>
          ),
        },
        {
          path: "/updateQuery/:id",
          loader: ({ params }) =>
            fetch(`https://bikolpo.vercel.app/updateQuery/${params.id}`),
          element: (
            <PrivateRoutes>
              <UpdateQuery></UpdateQuery>
            </PrivateRoutes>
          ),
        },
        {
          path: "/queryDetails/:id",
          loader: ({ params }) =>
            axios.post(`https://bikolpo.vercel.app/queryDetails/${params.id}`),
          element: (
            <PrivateRoutes>
              <QueryDetails></QueryDetails>
            </PrivateRoutes>
          ),
        },
      ],
    },
  ]);
  return Routes;
};

export default AllRoutes;
