import React from 'react';
import PropTypes from 'prop-types';

const Play = (props) => {
    const { color, size } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
        </svg>
    );
};

Play.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
};

Play.defaultProps = {
    color: 'var(--color-black)',
    size: 24,
};

export default Play;
