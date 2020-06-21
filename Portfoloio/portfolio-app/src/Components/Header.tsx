import React from 'react'
import styled from 'styled-components';


export const Header = () => {


    // const Button = styled.button`
    // background: transparent;
    // border-radius: 3px;
    // border: 2px solid palevioletred;
    // color: palevioletred;
    // margin: 0 1em;
    // padding: 0.25em 1em;
    // `;

    // background: ${props => props.selected ? 'red' : 'palevioletred'};
        
    const Button = styled.div<{ primary?: boolean }>`
        background: transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: black;
        margin: 0 1em;
        padding: 0.25em 1em;
        background: ${props => props.primary ? 'gray' : 'white'};
        
    `;


    return (
        <div>
            <Button>I am a button</Button>
            <br/>
            <Button primary>I am a primary button</Button>
            <div className="content">
                <p className="title is-3">Yousef Quran</p>
                <p className="subtitle is-5">GIS Developer</p>
            </div>

            <div className="tabs is-fullwidth">
                <ul>
                    <li>
                        <a href="#introduction">
                            <span className="icon is-small"><i className="fas" aria-hidden="true"></i></span>
                            <span>Introduction</span>
                        </a>
                    </li>
                    <li className="is-active">
                        <a href="#projects">
                            <span className="icon is-small"><i className="fas" aria-hidden="true"></i></span>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#blog">
                            <span className="icon is-small"><i className="fas" aria-hidden="true"></i></span>
                            <span>Blog</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <span className="icon is-small"><i className="far" aria-hidden="true"></i></span>
                            <span>About</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
