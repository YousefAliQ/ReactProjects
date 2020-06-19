import React from 'react'

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; 
}
// Use React.FC to type components
// That use children props
export const Button: React.FC<Props> = ({ onClick, children}) => {
    return (
        <button onClick={onClick}> {children} </button>
    )
}
