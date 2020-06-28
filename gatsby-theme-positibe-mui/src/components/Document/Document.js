import React from 'react'
import PropTypes from 'prop-types'
import Button from "../Button/Button";

const Document = ({href, label, className, variant = 'outlined', color = 'default'}) => (
    <Button variant={variant}
            color={color}
            className={className}
            target="_blank"
            href={href}>
      {label}
    </Button>
)

Document.propTypes = {
  component: PropTypes.object.isRequired,
  className: PropTypes.object
}

export default Document