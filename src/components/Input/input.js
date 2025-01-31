'use client';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.css'; // Assuming you are using CSS Modules

const Input = ({
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    label,
    required = false,
    error
}) => {
    return (
        <div className={styles.inputContainer}>
            {label && <label htmlFor={name} className={styles.label}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`${styles.input} ${error ? styles.errorInput : ''}`}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.string
};

export default Input;