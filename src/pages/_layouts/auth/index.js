import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
    return (
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
    );
}
AuthLayout.propTypes = {
    children: PropTypes.oneOf([PropTypes.func, PropTypes.element]).isRequired,
};
