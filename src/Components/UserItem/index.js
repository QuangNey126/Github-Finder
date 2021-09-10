import React from 'react'; 
import './UserItem.css';
import { useHistory } from "react-router-dom";

const UsersItem = (props) => {
    const { login, avatar_url } = props.user;
    const history = useHistory();
    const onLinkToUserDetail = () => {
        history.push(`/users/${login}`);
    };

    return (
        <div className="user col-12 col-md-6 col-lg-4">

            <img src={avatar_url} alt='img' className="user__avt" />

            <p className="user__name">{login}</p>
            <button className="btn btn-dark" onClick={onLinkToUserDetail}>MORE</button>
        </div>
    )
}
export default UsersItem;