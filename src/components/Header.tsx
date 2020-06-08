import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

export const Header = () => {
    return (
        <nav>
            <div className="wrapper">
                <ul>
                    <li>
                        <NavLink className="logo misc" to="/">🎹 Armony</NavLink>
                    </li>
                    <li>
                        <NavLink to="/scale-to-chords">Scale to Chords</NavLink>
                    </li>
                    <li>
                        <NavLink to="/notes-to-chords">Notes to Chords</NavLink>
                    </li>
                    <li>
                        <NavLink to="/common-chords">Common Chords</NavLink>
                    </li>
                    <li>
                        <a href="https://github.com/voho/armony/issues" className="misc" target="_blank">Submit an issue</a>
                    </li>
                    <li>
                        <a href="https://github.com/voho/armony" className="misc" target="_blank">Source</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
