import React from 'react';
import "./Nav.scss"
import Button from "../Button/Button";
import { Link } from "react-router-dom"

const Nav = props => {
    return (
        <nav>
            <Link to="/stalk">
                <div className="link">Stalk List</div>
            </Link>
            <Button classes="tr" value="Log Out" onClick={props.logOut} />
        </nav>
    )
}

export default Nav;