import React from 'react'

type Props = {
    //onClick: (e: React.MouseEvent) => void; // Basic Mouse Event
    //onChange?: (e: React.FormEvent<HTMLInputElement>) => void; // Button Mouse Event
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Input Event
}

export const Button = ({ onClick }: Props) => {
    return (
        <button onClick={onClick}> Click </button>
    )
}
