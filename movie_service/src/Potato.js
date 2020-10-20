import React from 'react';

function Food({ name, img }) {
    return (
        <div>
            <h2> I like { name } </h2>
            <img src={ img } alt={ name }/>
        </div>
    );
}

export default Food;