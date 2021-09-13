import React from 'react';
import PropTypes from 'prop-types';
import Flex from './Flex';
import ModeToggle from './ModeToggle';
import TextLink from './TextLink';

const Header = (props) => {
    const { handleToggleTheme, theme } = props;

    return (
        <header>
            <Flex padding="1rem 2rem" justifyContent="space-between">
                <TextLink href="/">Bed Loops</TextLink>
                <Flex>
                    <TextLink href="https://github.com/chrisschnaars/Bed-Loops" target="_blank">
                        Github
                    </TextLink>
                    <Flex width="24px" />
                    <ModeToggle handleClick={handleToggleTheme} theme={theme} />
                </Flex>
            </Flex>
        </header>
    );
};

Header.propTypes = {
    handleToggleTheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};

export default Header;
