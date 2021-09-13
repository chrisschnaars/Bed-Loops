import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    align-items: center;
    background: var(--color-action-default);
    border: 0;
    border-radius: var(--border-radius-pill);
    color: var(--color-white);
    cursor: pointer;
    display: flex;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-normal);
    letter-spacing: 0.4px;
    line-height: 1.5;
    padding: 0.5rem 1.25rem;
    transition: all var(--transition-speed-default);
    user-select: none;

    &:hover {
        background: var(--color-action-default-hover);
        box-shadow: var(--box-shadow-hover);
    }

    &.icon {
        background: transparent;
        border-radius: var(--border-radius-circle);
        padding: 0.75rem;

        svg {
            color: var(--color-icon-action-default);
            transition: color var(--transition-speed-default);
        }

        &:hover {
            background: var(--color-background-elevation);
            box-shadow: none;

            svg {
                color: var(--color-icon-action-default-hover);
            }
        }
    }
`;

const Button = (props) => {
    const { children, href, iconButton, onClick } = props;

    const tag = typeof href === 'string' ? 'a' : 'button';

    return (
        <StyledButton
            as={tag}
            className={iconButton && 'icon'}
            href={href}
            onClick={onClick}
            type={tag === 'button' ? 'button' : undefined}
        >
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    iconButton: PropTypes.bool,
};

Button.defaultProps = {
    onClick: null,
    href: null,
    iconButton: false,
};

export default Button;
