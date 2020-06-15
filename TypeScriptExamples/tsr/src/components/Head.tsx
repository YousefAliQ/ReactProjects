import React from 'react'

type Props = {
    title: String; // required
    isActive?: boolean; // optional
}

export const Head = ({ title = "Hello", isActive = true }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            {isActive && <h3>Active</h3>}
        </div>
    )
}

