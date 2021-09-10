import React, { Component } from 'react';
import './SearchUser.css';
import Button from '../Button';

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    };

    onSearchChange=e=>{
        this.setState({
            search: e.target.value,
        });
    };

    onSubmitSearchUser = (e) => {
        e.preventDefault();
        this.props.fetchUser(this.state.search);
        this.setState({
            search: "",
        });
    };

    render() {
        const {search} = this.state;
        const { isShowButtonClear, onClearUsers } = this.props;
        return (
            <div className="search">
                <form onSubmit={this.onSubmitSearchUser}>
                    <input name="search" placeholder="Enter username..." value={search} className="search__input" onChange={this.onSearchChange}/>

                    <Button label="Search" color="primary" type="submit" />

                    {/* <button type="submit" className="btn btn-primary search__btn">
                        Search
                    </button> */}
                    {isShowButtonClear && (
                        <Button label="Clear users" color="secondary" onClick={onClearUsers} />
                        // <button 
                        //     type="button" 
                        //     className="btn btn-light search__btn"
                        //     onClick={onClearUsers}
                        // >
                        //     Clear users
                        // </button>
                    )}
                </form>
            </div>
        );
    }
}

export default SearchUser;