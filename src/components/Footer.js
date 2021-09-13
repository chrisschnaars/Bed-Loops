import React from 'react';
import Flex from './Flex';
import TextLink from './TextLink';

const Footer = () => (
    <Flex as="footer" justifyContent="space-between" padding="1rem 0">
        <TextLink appearance="secondary" href="https://www.chrisschnaars.com/">
            Made by Chris Schnaars
        </TextLink>
        <TextLink appearance="secondary" href="#top">
            Top
        </TextLink>
    </Flex>
);

export default Footer;
