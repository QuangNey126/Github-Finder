import React, { Component } from 'react';
import SearchUser from '../../Components/SearchUser';
import UserAPI from '../../Services/user';

import Users from '../../Components/Users';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false,
        };
    }

    fetchUser = async (search) => {
        // Fetch User
        try {
            // loading
            this.setState({
                isLoading: true,
            });
            const response = await UserAPI.searchUser(search);
            // !loading
            this.setState({
                isLoading: false,
            });
            
            this.setState({
                users: response.data.items,
            })
        } catch(err) {
            console.error(err);
        }

        // Set State
    }

    render() {
        const { users, isLoading } = this.state;
        return (
            <div>
                <SearchUser fetchUser={this.fetchUser}/>
                <Users users={users} isLoading={isLoading} />
            </div>
        );
    }
}

export default Search;