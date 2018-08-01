import React from "react";
import { Link } from "@reach/router";

const Layout = props => (
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
                    </div>
                </nav>
            </div>
        </div>
        <div className="row">
            <div className="col-12">{props.children}</div>
        </div>
    </div>
);

export default Layout;
