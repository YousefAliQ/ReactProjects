import React from 'react'

type Props = {
    title: String;
    isActive: boolean;
}

export const Head = ({ title, isActive }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            {isActive && <h3>Active</h3>}
        </div>
    )
}

