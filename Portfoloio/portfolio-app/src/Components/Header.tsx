import React from 'react'




export const Header = () => {
    return (
        <div>
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
