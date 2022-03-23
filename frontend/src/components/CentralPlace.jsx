import React from 'react';

const CentralPlace = ({children}) => {
    return (
        <div className='flex flex-row min-h-screen items-center justify-center'>
            {children}
        </div>
    );
};

export default CentralPlace;