import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <input ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
Input.propTypes = {
    name: PropTypes.string.isRequired,
};
