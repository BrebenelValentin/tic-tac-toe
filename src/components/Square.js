import React from 'react';

const Square = ({value, test}) => {
    const handleClick = (e) => {
        e.preventDefault();
        test();
    }

    return (
    <button className="square" onClick={(e) => handleClick(e)}>
        {value}
    </button>
    );
    
}

export default Square