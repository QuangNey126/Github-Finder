import React, { Component } from 'react';
import SearchUser from '../../Components/SearchUser';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    fetchUser=(search)=>{
        // Fetch User  
        axios.get(
            `https://api.github.com/search/users?q=${search}`
        ).then((response) => {
            this.setState({
                users: response.data.items,
            });
        }).catch((err) => {
            console.log(err);
        });
        
        
        // Set state
    }

    render() {
        return (
            <div>
                <SearchUser fetchUser={this.fetchUser}/>
            </div>
        );
    }
}

export default Home;