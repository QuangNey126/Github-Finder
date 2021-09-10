import React, { Component } from 'react';
import SearchUser from '../../Components/SearchUser';
import UserAPI from '../../Services/user';

import Users from '../../Components/Users';
import Alert from '../../Layouts/Alert'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false,
            isShowButtonClear: false,
            isShowAlert: false,
        };
    }

    fetchUser = async (search) => {

        if(!search){
            this.setState({
                isShowAlert: true,
            });
            setTimeout(()=>{
                this.setState({
                    isShowAlert: false,
                });
            }, 2000);
            return;
        }

        // Fetch User
        try {
            // loading
            this.setState({
                isLoading: true,
            });
            const response = await UserAPI.searchUser(search);
            // !loading
            this.setState({
                users: response.data.items,
                isLoading: false,
                isShowButtonClear: true,
            });
        } catch(err) {
            console.error(err);
        }

        // Set State
    }

    onClearUsers = () => {
        this.setState({
            users: [],
            isShowButtonClear: false
        });
    };

    render() {
        const { users, isLoading, isShowButtonClear, isShowAlert } = this.state;
        return (
            <div>
                {isShowAlert && (
                    <Alert 
                        msg="Please enter the username before searching"
                        type="danger"
                    />
                )}
                <SearchUser 
                    fetchUser={this.fetchUser} 
                    isShowButtonClear={isShowButtonClear}
                    onClearUsers = {this.onClearUsers}
                />
                <Users users={users} isLoading={isLoading} />
            </div>
        );
    }    
}

export default Search;