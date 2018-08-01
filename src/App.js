import React, { Component } from "react";
import { Router } from "@reach/router";

import Login from "./components/login";
import Register from "./components/register";
import ListUsers from "./components/listUsers";
import User from "./components/user";
import Layout from "./layout";

import "./css/App.css";

const MainRoute = () => (
    <Router>
        <Login path="login" />
        <Register path="register" />
        <Layout path="/">
            <ListUsers path="list-users" />
            <User path="user" />
        </Layout>
    </Router>
);

export default MainRoute;
