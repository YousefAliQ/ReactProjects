import React, { useState } from 'react'

export const Input = () => {
    const [name, setName] = useState(""); // setState should not be a number!
    //const [name, setName] = useState<string>(""); 
    //const [name, setName] = useState<string | null>(null);    
    return <input value={name} onChange={e => setName(e.target.value)} />;
}
