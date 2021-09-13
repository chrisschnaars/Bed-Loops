import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFlex = styled.div``;

const Flex = (props) => {
    const {
        alignItems,
        as,
        children,
        display,
        flex,
        flexDirection,
        flexWrap,
        justifyContent,
        margin,
        padding,
        width,
    } = props;

    return (
        <StyledFlex
            as={as}
            style={{
                alignItems: alignItems || 'stretch',
                display,
                flex,
                flexDirection,
                flexWrap,
                justifyContent,
                margin,
                padding,
                width,
            }}
        >
            {children}
        </StyledFlex>
    );
};

Flex.propTypes = {
    alignItems: PropTypes.string,
    as: PropTypes.string,
    children: PropTypes.node,
    display: PropTypes.string,
    flex: PropTypes.string,
    flexDirection: PropTypes.string,
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string,
};

Flex.defaultProps = {
    alignItems: 'center',
    as: 'div',
    children: undefined,
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    margin: '0',
    padding: '0',
    width: 'auto',
};

export default Flex;
