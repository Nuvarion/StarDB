import React from 'react';

import './Error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <span className='boom'>BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droid to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;