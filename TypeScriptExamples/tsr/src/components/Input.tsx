import React, { useState, useRef } from 'react'

export const Input = () => {
    const [name, setName] = useState("");

    // const ref = useRef<HTMLInputElement | null>(null); 
    // !null Read Only
    const ref = useRef<HTMLInputElement>(null!);

    if (ref && ref.current) {
        console.log("ref", ref.current.value);
    }
    return <input ref={ref} value={name} onChange={e => setName(e.target.value)} />;
}
