import React from 'react'
import PropTypes from 'prop-types';

export const FormError = ({ error = ''}) => {
  return (
    <p className='w-full mt-1 text-sm text-danger'>
        <strong>{ error }</strong>
    </p>
  )
}

FormError.prototypes = {
    error: PropTypes.string
}