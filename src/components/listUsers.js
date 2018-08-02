import React, { Component } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default class ListUsers extends Component {
    state = {
        users: []
    };
    componentDidMount() {
        axios
            .get("https://reqres.in/api/users")
            .then(response => {
                const res = response.data;
                this.setState({
                    users: res.data
                });
            })
            .catch(error => {
                console.log("Error fetching users: ", error);
            });
    }
    renderUserLists = () => {
        const { users } = this.state;
        return users.map(user => {
            return (
                <tr key={user.id}>
                    <td>
                        <img src={user.avatar} alt="" className="img-fluid rounded" />
                    </td>
                    <td>{`${user.first_name} ${user.last_name}`}</td>
                    <td>
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate(`/user/${user.id}`)}
                        >
                            View Details
                        </button>
                    </td>
                </tr>
            );
        });
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Avatar</th>
                                    <th>Full Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>{this.renderUserLists()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
