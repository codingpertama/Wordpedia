import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutComp from "../pages/AboutComp";
import Template from "../Template";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/about",
                element: <AboutComp />
            }
        ]
    }

])