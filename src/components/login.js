import React, { Component } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        remember: false
    };
    handleInput = event => {
        const { email, password, remember } = this.state;
        const { name, value, type } = event.target;
        if (type === "checkbox") {
            this.setState({
                remember: !remember
            });
        } else {
            this.setState({
                [name]: value
            });
        }
    };
    handleLogin = e => {
        e.preventDefault();
        const { email, password, remember } = this.state;
        axios
            .post("https://reqres.in/api/login", {
                email: email,
                password: password
            })
            .then(response => {
                const token = response.data.token;
                if (remember) {
                    localStorage.setItem("token", token);
                } else {
                    sessionStorage.setItem("token", token);
                }
                navigate("/list-users");
            })
            .catch(err => {
                console.log("Error logging : ", err);
            });
    };
    render() {
        const { email, password, remember } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "20rem", marginTop: "6rem" }}>
                            <h2 className="card-header">Login</h2>
                            <form onSubmit={this.handleLogin}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            value={email}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={password}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            value={remember}
                                            onChange={this.handleInput}
                                        />
                                        <label htmlFor="checkbox" className="form-check-label">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => navigate("/register")}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
