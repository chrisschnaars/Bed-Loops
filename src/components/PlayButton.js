import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pause from './Icons/Pause';
import Play from './Icons/Play';

const ButtonInner = styled.div`
    align-items: center;
    background: var(--color-background-secondary);
    border-radius: var(--border-radius-circle);
    display: flex;
    padding: 1rem;
    transition: all var(--transition-speed-default);
`;

const ButtonOuter = styled.button`
    align-items: center;
    background: var(--color-action-default);
    border: 0;
    border-radius: var(--border-radius-circle);
    cursor: pointer;
    display: flex;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-normal);
    line-height: 1.5;
    padding: 0.125rem;
    user-select: none;

    &.isPlaying {
        background: var(--color-action-default);

        ${ButtonInner} {
            background: transparent;
        }
    }

    &:hover {
        background: var(--color-action-default-hover);

        svg {
            color: var(--color-white);
        }

        ${ButtonInner} {
            background: transparent;
        }
    }
`;

const PlayButton = (props) => {
    const { handleClick, isPlaying } = props;
    const iconSize = 24;

    return (
        <ButtonOuter
            aria-label={isPlaying ? 'Pause Loop' : 'Play Loop'}
            className={isPlaying && 'isPlaying'}
            onClick={handleClick}
            type="button"
        >
            <ButtonInner className={isPlaying && 'isPlaying'}>
                {isPlaying ? (
                    <Pause color="var(--color-white)" size={iconSize} />
                ) : (
                    <Play color="var(--color-text-primary)" size={iconSize} />
                )}
            </ButtonInner>
        </ButtonOuter>
    );
};

PlayButton.propTypes = {
    isPlaying: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
};

PlayButton.defaultProps = {
    isPlaying: false,
};

export default PlayButton;
