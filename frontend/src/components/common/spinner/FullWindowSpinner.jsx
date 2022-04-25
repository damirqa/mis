import React from 'react';
import CentralPlace from "../../CentralPlace";
import Spinner from "./Spinner";

const FullWindowSpinner = () => {
    return (
        <CentralPlace>
            <Spinner width='6' height='6'/>
        </CentralPlace>
    );
};

export default FullWindowSpinner;