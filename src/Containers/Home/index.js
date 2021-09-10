import React, { Component } from 'react';
import UserAPI from '../../Services/user';
import Users from '../../Components/Users';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await UserAPI.fetchUsers();
            this.setState({
                users: response.data,
            });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const { users } = this.state;
        return (
            <div className="mt-3">
                <Users users={users} />
            </div>
        );
    }
}

export default Home;