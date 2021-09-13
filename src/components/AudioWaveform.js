import React from 'react';
import PropTypes from 'prop-types';

const AudioWaveform = (props) => {
    const { url } = props;
    return <p>hi</p>;
};

AudioWaveform.propTypes = {
    url: PropTypes.string.isRequired,
};

export default AudioWaveform;
