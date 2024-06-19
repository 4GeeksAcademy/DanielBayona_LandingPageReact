//import react into the bundle
import React from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "../styles/index.css"
import Layout from "./Layout.jsx";



//render your react application
createRoot(document.querySelector("#app")).render(<Layout/>)
