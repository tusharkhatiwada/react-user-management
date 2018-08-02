import React, { Component } from "react";
import axios from "axios";

export default class User extends Component {
    state = {
        avatar: "",
        name: ""
    };
    componentDidMount() {
        const id = this.props.id;
        axios
            .get(`https://reqres.in/api/users/${id}`)
            .then(response => {
                const res = response.data.data;
                this.setState({
                    avatar: res.avatar,
                    name: `${res.first_name} ${res.last_name}`
                });
            })
            .catch(err => {
                console.log("Error in user: ", err);
            });
    }
    render() {
        const { avatar, name } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "18rem", marginTop: "5rem" }}>
                            <img src={avatar} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
