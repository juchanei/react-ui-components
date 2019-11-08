import React, { useState, useEffect, useRef } from 'react'

const usePrevious = value => {
    const ref = useRef()
    useEffect(() => {
       ref.current = value 
    })
    return ref.current
}

const withToggle = (ComponentChecked, ComponentNotChecked) => React.forwardRef(
    ({ checked = false, onChange, children, ...props }, ref) => {
        const [isChecked, setChecked] = useState(checked)
        const prevIsChecked = usePrevious(isChecked)
    
        useEffect(() => {
            if (onChange && isChecked !== prevIsChecked)
                onChange(isChecked)
        }, [isChecked])

        const handleClick = e => {
            event.preventDefault()
            const nextIsChecked = !isChecked
            setChecked(nextIsChecked)
        }

        const Component = isChecked ? ComponentChecked : ComponentNotChecked
        
        return (
            <Component
                ref={ref}
                onClick={handleClick}
                checked={isChecked}
                {...props}>
                {children}
            </Component>
        )
    }
)

export default withToggle