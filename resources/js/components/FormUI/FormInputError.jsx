import React from "react";
import { FormError } from "./FormError";
import PropTypes from "prop-types";

const FormInputError = ({
    fieldName,
    placeHolder,
    required,
    type,
    label = "",
    other = "",
    error,
    errors,
    register,
    clearError = () => {},
}) => {
    return (
        <div className="d-grid mt-8">
            <label>{label}</label>
            <input
                type={type}
                {...register(fieldName, { onChange: () => clearError() })}
                className="border border-success p-2 border-opacity-10 rounded-3 w-75"
                placeHolder={placeHolder}
                name={fieldName}
                required={required}
            />
            {error ? (
                <FormError error={error} />
            ) : (
                errors[fieldName] && (
                    <FormError error={errors[fieldName]?.message} />
                )
            )}
        </div>
    );
};

export default FormInputError;
FormInputError.propTypes = {
    fieldName: PropTypes.string,
    placeHolder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    errors: PropTypes.objectOf(Object),
    register: PropTypes.elementType,
    label: PropTypes.string,
    other: PropTypes.string,
    error: PropTypes.string,
    clearError: PropTypes.func,
};
