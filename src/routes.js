import React from "react";
import { Redirect } from "react-router-dom";


// Route Views
//import BlogOverview from "./views/BlogOverview";


export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard-production" />
  }
  /*,
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },*/
];
