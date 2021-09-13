import React, { useState } from 'react';
import styled from 'styled-components';
import loopData from '../data/loopData';
import Button from './Button';
import Flex from './Flex';
import LoopBar from './LoopBar';

const Heading = styled.h1`
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    line-height: 2.75rem;
`;

const LoopList = () => {
    const [activeTrack, setActiveTrack] = useState();
    const [activeRef, setActiveRef] = useState(null);

    const togglePlaying = (isActive, id, ref) => {
        if (isActive) {
            ref.current.pause();
            setActiveTrack(null);
            setActiveTrack(null);
        } else {
            // Stop any active tracks
            if (activeRef !== null) {
                activeRef.current.pause();
            }
            // Play clicked track
            ref.current.play();
            setActiveTrack(id);
            setActiveRef(ref);
        }
    };

    return (
        <main>
            <Flex justifyContent="space-between" margin="0 0 2rem 0">
                <Heading>Short Seamless Loops</Heading>
                <Button>Download All</Button>
            </Flex>
            {loopData.map((song, index) => (
                <LoopBar
                    key={song.fileUrl}
                    isActive={index === activeTrack}
                    artistName={song.artistName}
                    handleTogglePlaying={togglePlaying}
                    id={index}
                    song={song}
                />
            ))}
        </main>
    );
};

export default LoopList;
