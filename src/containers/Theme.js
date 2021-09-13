import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const baseColors = {
    white: '#fff',
    black: '#090A0C',

    gray20: 'hsla(222, 14%, 18%, 1)',
    gray30: 'hsla(222, 14%, 27%, 1)',
    gray40: 'hsla(222, 12%, 37%, 1)',
    gray70: 'hsla(222, 10%, 68%, 1)',
};

const theme = {
    colors: {
        ...baseColors,
        text: {
            primary: baseColors.white,
            secondary: baseColors.gray70,
        },
        background: {
            primary: baseColors.gray20,
            secondary: baseColors.gray30,
        },
        action: {
            default: 'hsla(45, 93%, 58%, 1)',
        },
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        sm: '1rem',
        md: '1.125rem',
        lg: '1.375rem',
        xl: '2rem',
    },
    fontWeights: {
        normal: 400,
    },
    radii: {
        default: '0.25rem',
        pill: '20rem',
    },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Theme.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Theme;
