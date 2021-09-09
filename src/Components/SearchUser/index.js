import React, { Component } from 'react';

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            search: "",
        };
    };

    onSearchChange=e=>{
        this.setState({
            search: e.target.value,
        });
    };

    render() {
        const {search} = this.state;
        return (
            <div>
                <form>
                    <input name="search" value={search}  onChange={this.onSearchChange}/>

                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchUser;