import React, { ReactElement } from 'react';
import './styles.css';

interface IErrorProps {
    location?: History;
}

const Error = (props: IErrorProps): ReactElement => {
    const errorDetails = props.location?.state;
    return (
        <div>
            <div className="error-container">
                {<>{errorDetails?.error?.message}</>}
            </div>
        </div>
    );
};

export default Error;
