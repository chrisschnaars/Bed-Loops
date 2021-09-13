import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import Flex from './Flex';
import PlayButton from './PlayButton';
import Text from './Text';

export const WaveformContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    background: transparent;
`;

export const Wave = styled.div`
    width: 100%;
    height: 90px;
`;

class Audio extends Component {
    componentDidMount() {
        const track = document.querySelector('.track');

        this.waveform = WaveSurfer.create({
            barWidth: 3,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'WebAudio',
            height: 80,
            progressColor: '#2D5BFF',
            responsive: true,
            waveColor: `var(--color-cyan)`,
            cursorColor: 'transparent',
        });

        this.waveform.load(track);
    }

    toggleSound = () => {
        this.waveform.playPause();
    };

    render() {
        const { isActive, audioRef, id, song } = this.props;

        return (
            <WaveformContainer>
                <PlayButton handleClick={this.toggleSound} isPlaying={isActive} />
                <audio className="track" loop ref={audioRef} src={song.fileUrl}>
                    <track kind="captions" />
                </audio>
                <Flex alignItems="start" flexDirection="column" margin="0 1.5rem" width="100%">
                    <Flex margin="0 1rem" width="100%">
                        <Text>{song.artistName}</Text>
                        <Text margin="0 .5rem">&ndash;</Text>
                        <Text>{song.songTitle}</Text>
                    </Flex>
                    <Wave id={`waveform${id}`} />
                </Flex>
            </WaveformContainer>
        );
    }
}

Audio.propTypes = {
    audioRef: PropTypes.oneOfType([
        // Either a function
        PropTypes.func,
        // Or the instance of a DOM native element (see the note about SSR)
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]).isRequired,
    isActive: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    song: PropTypes.shape({
        artistName: PropTypes.string,
        songTitle: PropTypes.string,
        fileUrl: PropTypes.string,
    }).isRequired,
};

export default Audio;
