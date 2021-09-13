import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
    color: var(--color-text-primary);
    text-decoration: none;

    &.secondary {
        color: var(--color-text-secondary);
    }

    &:hover {
        text-decoration: underline;
        text-underline-offset: 0.1rem;
    }
`;

const TextLink = (props) => {
    const { appearance, children, href, target } = props;
    return (
        <StyledLink className={appearance} href={href} target={target}>
            {children}
        </StyledLink>
    );
};

TextLink.propTypes = {
    appearance: PropTypes.string,
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
};

TextLink.defaultProps = {
    appearance: 'default',
    target: '_self',
};

export default TextLink;
