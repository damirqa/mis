import React from 'react';

const HiddenInput = ({name, type = 'text', data}) => {
    return (
        <input id={name} type={type} defaultValue={data[name]} readOnly={true} className='hidden'/>
    );
};

export default HiddenInput;