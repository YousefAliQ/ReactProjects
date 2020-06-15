import React from 'react'

type Props = {
    // onClick(): string; 
    // onClick(): void;
    //onClick(text : string): void; 
    onClick: (text: string) => void;
}

export const Button = ({ onClick }: Props) => {
    return (
        <button onClick = {() => onClick("hi")}> Click </button>
    )
}
