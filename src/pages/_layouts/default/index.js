import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Menu from '~/components/Header';

export default function DefaultLayout({ children }) {
    return (
        <Wrapper>
            <Menu />
            {children}
        </Wrapper>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.oneOf([PropTypes.func, PropTypes.element]).isRequired,
};
