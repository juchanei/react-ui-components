import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '../logo.svg'

import Button from './Button'
import ToggleButton from './ToggleButton'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Title = styled.h1`
	text-align: center;
`

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

const Logo = styled.img`
	width: 10em;
	animation: ${rotate} infinite 10s linear;
`

const App = props => (
    <Wrapper>
        <Logo src={logo} alt='react logo' />
        <Title {...props}>Hello React!</Title>
        <ToggleButton onChange={console.log} checked={true}>
            toggle!
        </ToggleButton>
        <ToggleButton onChange={console.log}>
            toggle!
        </ToggleButton>
        <ToggleButton onChange={console.log}>
            toggle!
        </ToggleButton>
    </Wrapper>
)

export default App