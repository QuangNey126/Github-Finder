import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {label, color, type, onClick} = props;
    return <button type="type" className={`btn btn-${color} search__btn`} onClick={onClick}>{label}</button>;
};

// Giá trị mặc định của props nếu 
// dev không truyền user
Button.defaultProps = {
    color:"secondary",
    label: "Button",
    type: "button",
};

Button.proTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
};

export default Button;