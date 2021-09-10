import React from 'react';

import PropTypes from 'prop-types';

export const Alert = (props) => {
    const {msg, type} = props;
    return (
        <div className={`alert alert-${type} mt-3`}>
            <p>{ msg }</p>
        </div>
    );
};

Alert.propTypes = {
    type: "danger",
    msg: "Something wrong",
};
Alert.propTypes = {
    type: PropTypes.string,
    type: PropTypes.string,
};

export default Alert;