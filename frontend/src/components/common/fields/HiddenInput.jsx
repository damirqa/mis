import React from 'react';

const HiddenInput = ({name, type = 'text', data}) => {
    return (
        <input id={name} type={type} value={data[name]} readOnly className='hidden'/>
    );
};

export default HiddenInput;