import React from 'react'

export const LineNav = ({className}) => {
  return (
     <span className={`line h-10 w-0.5 line-gradient bg-gradient-to-t ${className}`}></span>
  )
}

export const LineWsize = ({width}) => {
  return (
     <span className={`line line-gradient ${width} h-[1px] bg-gradient-to-l`}></span>
  )
}
 
