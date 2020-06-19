import React, { useReducer, useRef } from 'react'
import { useClickOutside } from './useClickOutside';

export const ReducerButtons = () => {

    const initialState = { rValue: true };

    type State = {
        rValue: boolean;
    }

    type Action = { type: "one" | "two"; }

    function reducer(state: State, action: Action) {
        switch (action.type) {
            case 'one':
                return { rValue: true }
            case 'two':
                return { rValue: false }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const ref = useRef<HTMLDivElement>(null!);
    useClickOutside(ref, () => {
        console.log("clicked outside");
    });
    return (
        <div ref={ref}>
            {state && state.rValue &&
                <h1>Visible</h1>
            }
            <button onClick={() => dispatch({ type: "one" })}>Action One</button>
            <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
        </div>
    )
}
