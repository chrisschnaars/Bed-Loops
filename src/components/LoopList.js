import React, { useState } from 'react';
import loopData from '../data/loopData';
import Button from './Button';
import Flex from './Flex';
import Heading from './Heading';
import LoopBar from './LoopBar';

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
                <Heading level={1}>Short Seamless Loops</Heading>
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
