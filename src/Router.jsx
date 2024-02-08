import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Banana from "./Banana";
import Grape from "./Grape";
import NotFound from "./NotFound";
import Layout from "./Layout";
import Detail from "./Detail";
import Info from "./Info";
import SearchPage from "./SearchPage";
import Infotv from "./Infotv";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet/>,
      errorElement: <NotFound/>,
      children: [
        {
            path: "/",
            element: <App/>
        },
        {
            path: "/banana",
            element: <Banana/>
        },
        {
            path: "/grape",
            element: <Grape/>
        },
        {
            path: "/layout",
            element: <Layout/>
        },
        {
            path: "/detail",
            element: <Detail/>
        },
        {
            path: "/info/:id",
            element: <Info/>
        },
        {
            path: "/searchpage",
            element: <SearchPage/>
        },
        {
            path: "/infotv/:id",
            element: <Infotv/>
        },
        {
            path: "/a",
            element: <NotFound/>
        },
      ]
    },
 
  ]);

  export default  router;