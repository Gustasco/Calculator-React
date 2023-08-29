import React from 'react';

function Display(props) {
    return (
        <div id="display" className="display">
            {props.value}
        </div>
    );
}

export default Display;