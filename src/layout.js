import React, { Component } from "react";
import { Link, navigate, Redirect } from "@reach/router";

let token;
if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
} else {
    token = sessionStorage.getItem("token");
}

export default class Layout extends Component {
    componentDidMount() {
        // if (token) {
        //     navigate("/list-users");
        // } else {
        //     navigate("login", { replace: true });
        // }
    }
    handleLogout = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/login");
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                            <a className="navbar-brand" href="#">
                                User Management
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="list-users">
                                            User List
                                        </Link>
                                    </li>
                                </ul>
                                <button
                                    className="btn btn-outline-light"
                                    onClick={this.handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">{this.props.children}</div>
                </div>
            </div>
        );
    }
}
