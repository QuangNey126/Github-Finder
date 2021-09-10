import React, { Component } from 'react';
import SearchUser from '../../Components/SearchUser';
import UserAPI from '../../Services/user';

import Users from '../../Components/Users';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    fetchUser = async (search) => {
        // Fetch User
        try{
            const response = await UserAPI.searchUser(search);
            this.setState({
                users: response.data.items,
            })
        } catch(err) {
            console.error(err);
        }

        // Set State
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <SearchUser fetchUser={this.fetchUser}/>
                <Users users={users} />
            </div>
        );
    }
}

export default Search;