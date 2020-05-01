import React from 'react';

const Description = (props) =>{
    return(
        <div className='description'>
            <p>{props.children}</p>
        </div>
    )
}

export default Description;