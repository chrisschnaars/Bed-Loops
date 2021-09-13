import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Dark from './Icons/Dark';
import Light from './Icons/Light';

const ModeToggle = (props) => {
    const { handleClick, theme } = props;
    const isDarkMode = theme === 'dark';

    return (
        <Button
            aria-label={isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
            iconButton
            type="button"
            onClick={handleClick}
        >
            {isDarkMode ? <Light /> : <Dark />}
        </Button>
    );
};

ModeToggle.propTypes = {
    handleClick: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};

export default ModeToggle;
