import React from 'react';

const FieldError = ({ children }) => {
    return <small className="text-red-500 pr-2">{children}</small>;
};

export default FieldError;
