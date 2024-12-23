import React from "react";
import PropTypes from "prop-types";

export const FormButton = ({
    type = "button",
    disabled = false,
    className = "",
    onClick = () => {},
    name = "",
    style,
}) => {
    const handleOnclick = () => {
        onClick();
    };
    return (
        <div>
            <button
                type={type}
                disabled={disabled}
                className={className}
                onClick={handleOnclick}
                style={style}
            >
                {name}
            </button>
        </div>
    );
};

FormButton.prototypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
    style: PropTypes.object
}
