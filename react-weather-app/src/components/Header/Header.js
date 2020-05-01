import React from 'react';

const Header = (props) =>{
    return (
        <div style={{backgroundColor: props.color}}>
            <h1>Henry's weather app</h1>
        </div>
    )
};

export default Header;