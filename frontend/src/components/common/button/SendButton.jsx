import React from 'react';
import Spinner from "../spinner/Spinner";

const SendButton = ({text ,loading = false}) => {
    return (
        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full px-5 py-2.5 text-center">
            {loading && <Spinner/>}
            {text}
        </button>
    );
};

export default SendButton;