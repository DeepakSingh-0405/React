import React from 'react'

function Button(
{   children,
    classname='',
    ...props

}) {
  return (
    <button className={`m-auto p-2 text-white bg-red-700 ${classname}`} {...props}>{children}</button>
  )
}

export default Button