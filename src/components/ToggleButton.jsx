import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import withToggle from '../hoc/withToggle'

const ButtonNotChecked = Button

const ButtonChecked = styled(Button)`
    background-color: black;
    color: white;
`

export default withToggle(ButtonChecked, ButtonNotChecked)