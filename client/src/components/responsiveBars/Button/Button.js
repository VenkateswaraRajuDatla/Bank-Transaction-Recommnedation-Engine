import React from 'react';
import '../../pk/login.scss'

// import './Button.scss';

const button = (props) => (
    <button
        className={['btn btn-primary login-button', [props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;
