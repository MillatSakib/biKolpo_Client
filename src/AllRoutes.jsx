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
import { Helmet, HelmetProvider } from "react-helmet-async";

const AllRoutes = () => {
  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement: (
        <HelmetProvider>
          <Helmet>
            <title>biKolpo - 404 Not Found</title>
          </Helmet>
          <NotFoundPage></NotFoundPage>
        </HelmetProvider>
      ),
      children: [
        {
          path: "/",
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - Home</title>
              </Helmet>
              <Home></Home>
            </HelmetProvider>
          ),
        },
        {
          path: "/login",
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - Login</title>
              </Helmet>
              <AuthPrivateRoute>
                <Login></Login>
              </AuthPrivateRoute>
            </HelmetProvider>
          ),
        },
        {
          path: "/register",
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - Register</title>
              </Helmet>
              <AuthPrivateRoute>
                <Register></Register>
              </AuthPrivateRoute>
            </HelmetProvider>
          ),
        },

        {
          path: "/queris",
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - All Queries</title>
              </Helmet>
              <AllQueries></AllQueries>
            </HelmetProvider>
          ),
        },

        {
          path: "/recomendationsForMe",
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - Recomended For Me</title>
              </Helmet>
              <PrivateRoutes>
                <RecomendedForMe></RecomendedForMe>
              </PrivateRoutes>
            </HelmetProvider>
          ),
        },

        {
          path: "/myQueries",
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - My Queries</title>
              </Helmet>
              <PrivateRoutes>
                <MyQueries></MyQueries>
              </PrivateRoutes>
            </HelmetProvider>
          ),
        },

        {
          path: "/myRecomendation",
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - My Recomendation</title>
              </Helmet>
              <PrivateRoutes>
                <MyRecomendetion></MyRecomendetion>
              </PrivateRoutes>
            </HelmetProvider>
          ),
        },
        {
          path: "/addQueries",
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - Add Query</title>
              </Helmet>
              <PrivateRoutes>
                <AddQueries></AddQueries>
              </PrivateRoutes>
            </HelmetProvider>
          ),
        },
        {
          path: "/updateQuery/:id",
          loader: ({ params }) =>
            fetch(`https://bikolpo.vercel.app/updateQuery/${params.id}`),
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - Update Query</title>
              </Helmet>
              <PrivateRoutes>
                <UpdateQuery></UpdateQuery>
              </PrivateRoutes>
            </HelmetProvider>
          ),
        },
        {
          path: "/queryDetails/:id",
          loader: ({ params }) =>
            axios.post(`https://bikolpo.vercel.app/queryDetails/${params.id}`),
          element: (
            <HelmetProvider>
              <Helmet>
                <title>biKolpo - Query Details</title>
              </Helmet>
              <PrivateRoutes>
                <QueryDetails></QueryDetails>
              </PrivateRoutes>
            </HelmetProvider>
          ),
        },
      ],
    },
  ]);
  return Routes;
};

export default AllRoutes;
