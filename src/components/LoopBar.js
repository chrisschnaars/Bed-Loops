import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Download from './Icons/Download';
import Flex from './Flex';
import PlayButton from './PlayButton';
import Text from './Text';

const Container = styled.div`
    background: var(--color-background-secondary);
    border-radius: var(--border-radius-pill);
    margin-bottom: 2rem;
    padding: 1.25rem 1.5rem 1.25rem 1.25rem;
`;

const LoopBar = (props) => {
    const { isActive, handleTogglePlaying, id, song } = props;
    const myRef = useRef();

    const audio = new Audio();

    const toggleSound = () => {
        handleTogglePlaying(isActive, id, myRef);
    };

    return (
        <Container>
            <Flex>
                <PlayButton handleClick={toggleSound} isPlaying={isActive} />
                <audio loop ref={myRef} src={song.fileUrl}>
                    <track kind="captions" />
                </audio>
                <Flex alignItems="start" flexDirection="column" margin="0 1.5rem" width="100%">
                    <Flex width="100%">
                        <Text>{song.artistName}</Text>
                        <Text margin="0 0.5rem">&ndash;</Text>
                        <Text>{song.songTitle}</Text>
                    </Flex>
                </Flex>
                <Button
                    aria-label="Download Song"
                    appearance="secondary"
                    iconButton
                    href={song.fileUrl}
                >
                    <Download size={24} />
                </Button>
            </Flex>
        </Container>
    );
};

LoopBar.propTypes = {
    id: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    handleTogglePlaying: PropTypes.func.isRequired,
    song: PropTypes.shape({
        artistName: PropTypes.string,
        songTitle: PropTypes.string,
        fileUrl: PropTypes.string,
    }).isRequired,
};

LoopBar.defaultProps = {
    isActive: false,
};

export default LoopBar;
