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
            <polygon points="5 3 19 12 5 21 5 3" />
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
