import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {
    const { children, margin } = props;

    return (
        <p
            style={{
                margin,
            }}
        >
            {children}
        </p>
    );
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    margin: PropTypes.string,
};

Text.defaultProps = {
    margin: '0',
};

export default Text;
