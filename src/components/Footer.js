import React from 'react';
import Flex from './Flex';
import TextLink from './TextLink';

const Footer = () => (
    <footer>
        <Flex justifyContent="space-between" padding="1rem 0">
            <TextLink appearance="secondary" href="https://www.chrisschnaars.com/">
                Made by Chris Schnaars
            </TextLink>
            <TextLink appearance="secondary" href="#top">
                Top
            </TextLink>
        </Flex>
    </footer>
);

export default Footer;
