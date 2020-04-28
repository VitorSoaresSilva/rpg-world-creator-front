import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
    return (
        <Wrapper>
            <Content>{children}</Content>
            {children}
        </Wrapper>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.oneOf([PropTypes.func, PropTypes.element]).isRequired,
};
