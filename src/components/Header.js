import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>To-do List</h1>
        </header>
    )
};

const headerStyle = {
    background: "#B07840",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

export default Header;