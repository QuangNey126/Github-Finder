import React, { Component } from 'react';
import SearchUser from '../../Components/SearchUser';
import UserAPI from '../../Services/user';

import Users from '../../Components/Users';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    // Cách 1
    // fetchUser=(search)=>{
    //     // Fetch User  
    //     axios.get(
    //         `https://api.github.com/search/users?q=${search}`
    //     ).then((response) => {
    //         this.setState({
    //             users: response.data.items,
    //         });
    //     }).catch((err) => {
    //         console.log(err);
    //     });
        
        
    //     // Set state
    // }

    // Cách 2
    fetchUser = async (search) => {
        // Fetch User
        try{
            const response = await UserAPI.fetchUser(search);
            this.setState({
                users: response.data.items,
            })
        } catch(err) {
            console.error(err);
        }

        // Set State
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                <SearchUser fetchUser={this.fetchUser}/>
                <Users users={users} />
            </div>
        );
    }
}

export default Home;