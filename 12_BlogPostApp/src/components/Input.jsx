import React from 'react'
import {useForwardRef, useId} from 'react'


const Input = React.forwardRef(({
    label = '',
    type='text',
    placeholder='',
    className='',
    ...props
},ref)=>{
    const id = useId()
    return (
        <div>
            {label && <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-900'>
                {label}
            </label>
            }
            <input type = {type} 
            id = {id}
            placeholder = {placeholder}
            className = {`border border-gray-300 rounded-md p-2 ${className}`}
            {...props}
            ref = {ref}
            />
        </div>
    )
})

export default Input