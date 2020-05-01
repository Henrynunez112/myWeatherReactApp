import React from 'react';

const Temperature = (props) =>{
    return(
        <div className='temperature'>
            <p>{props.children}</p>
        </div>
    )
}
export default Temperature;