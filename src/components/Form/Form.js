'use client';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css'; // Assuming you are using CSS Modules

const Form = ({ fields, onSubmit, initialData, buttonText }) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        fields.forEach(field => {
            if (field.required && !formData[field.name]) {
                formIsValid = false;
                errors[field.name] = `${field.label} is required`;
            }
        });

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {fields.map((field, index) => (
                <div key={index} className={styles.formGroup}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        className={styles.formControl}
                    />
                    {errors[field.name] && <span className={styles.error}>{errors[field.name]}</span>}
                </div>
            ))}
            <button type="submit" className={styles.submitButton}>{buttonText}</button>
        </form>
    );
};

Form.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
    })).isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
};

export default Form;