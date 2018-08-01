import React, { Component } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

export default class Register extends Component {
    state = {
        email: "",
        password: ""
    };
    handleInput = event => {
        const { email, password } = this.state;
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleRegister = e => {
        e.preventDefault();
        const { email, password } = this.state;
        axios
            .post("https://reqres.in/api/register", {
                email: email,
                password: password
            })
            .then(response => {
                const token = response.data.token;
                sessionStorage.setItem("token", token);
                navigate("/list-users");
            })
            .catch(err => {
                console.log("Error logging : ", err);
            });
    };
    render() {
        const { email, password } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "20rem", marginTop: "6rem" }}>
                            <h2 className="card-header">Register</h2>
                            <form onSubmit={this.handleRegister}>
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
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => navigate("/login")}
                                    >
                                        Back to Login
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
