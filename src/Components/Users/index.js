import React from 'react'; 
import UserItem from '../UserItem';

const Users = (props) => {

    const {users} = props;
    return (
        <div className="row">
            {users.map((userItem, index) => {
                return <UserItem user={userItem} key={index} />
            })}
        </div>
    )
}
export default Users;