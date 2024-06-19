import React from "react";
import "./NavBar.css"
import PropTypes from 'prop-types';

const NavBar = (props) =>{
    const navItems = [{label: "Home"}, {label: "Features"}, {label: "Pricing"}]
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body"  data-bs-theme="dark">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="#">{props.brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            navItems.map((nameItem,index) =>{
                               return <a className="nav-link myStyle" href="#" key={index}>{nameItem.label}</a>
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
        )
}

NavBar.propTypes = {
    brand: PropTypes.string
}

export default NavBar;