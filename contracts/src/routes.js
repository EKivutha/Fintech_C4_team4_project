import Home from './layout/home'
import Login from './layout/login'
import Signup from './layout/signup'
import React from "react";
import { Redirect } from "react-router-dom";
import Layout from "./layout/Layout";



export default [
    {
      path: "/",
      exact: true,
      layout: Layout,
      component: () => <Redirect to="/Home" />
    },
    {
      path: "/home",
      layout: Layout,
      component:Home
    },
    {
      path: "/login",
      layout: Layout,
      component: Login
    },
    {
      path: "/signup",
      layout: Layout,
      component:Signup
    },
    
  ];