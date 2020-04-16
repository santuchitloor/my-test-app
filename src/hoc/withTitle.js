import React from 'react';

const withTitle = (WrappedComponent, title, className) => {
    return props => (
        // eslint-disable-next-line no-unused-expressions
        <div className={className}>
            <h2>{title}</h2>
            <WrappedComponent {...props}  />
        </div>
    );
}

export default withTitle;
