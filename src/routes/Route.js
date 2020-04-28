/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { isAuthenticated } from '~/services/auth';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    let Layout;
    const signed = isAuthenticated();
    if (signed) {
        if (!isPrivate) {
            return <Redirect to="/dashboard" />;
        }
        Layout = DefaultLayout;
    } else {
        if (isPrivate) {
            return <Redirect to="/" />;
        }
        Layout = AuthLayout;
    }
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}
RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.element.isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
