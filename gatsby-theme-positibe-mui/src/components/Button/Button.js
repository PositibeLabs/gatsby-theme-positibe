import React from 'react'
import {default as MuiButton} from "@material-ui/core/Button";

const Button = ({href, children, className, variant = 'outlined', color = 'default', target ='_self'}) => (
    <MuiButton variant={variant}
               color={color}
               className={className}
               target={target}
               href={href}>
      {children}
    </MuiButton>
)

export default Button