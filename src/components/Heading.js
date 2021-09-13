import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.h1`
    font-size: var(--heading-xl-font-size);
    font-weight: var(--font-weight-bold);
    line-height: 2.75rem;
`;

const Heading = (props) => {
    const { children, level } = props;

    const tag = `h${level}`;
    return <Wrapper as={tag}>{children}</Wrapper>;
};

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    level: PropTypes.string,
};

Heading.defaultProps = {
    level: '2',
};

export default Heading;
