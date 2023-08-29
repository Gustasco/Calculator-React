import React from 'react';

function Button(props) {
    return (
        <button
            id={props.id}
            className="button"
            onClick={() => props.onClick(props.value)}
        >
            {props.value}
        </button>
    );
}

export default Button;