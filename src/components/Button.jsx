import React from 'react'
import styled from 'styled-components'

const Button = React.forwardRef(({ children, ...props }, ref) => (
    <button ref={ref} {...props}>{children}</button>
))

const theme = {
    primary: 'black',
    onPrimary: 'white',
    disabled: 'lightgray',
    onDisabled: 'white',
    background: 'transparent',
    onBackground: 'black',
}

export default styled(Button)`
    padding: 1em;
    background-color: transparent
    border: 1px solid ${theme.primary};
    outline: none;
    color: ${theme.onBackground};
    cursor: pointer;

    &:hover {
        background-color: ${theme.primary};
        color: ${theme.onPrimary};
    }

    &:disabled {
        border: 1px solid ${theme.disabled};
        background-color: ${theme.background};
        color: ${theme.disabled};
    }
`