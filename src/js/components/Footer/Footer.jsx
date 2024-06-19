import React from "react";
import "./Footer.css"
import PropTypes from 'prop-types';

const Footer = ({title}) =>{
    return (
        <footer class="py-3 mt-5 bg-dark"  data-bs-theme="dark">
            <p class="text-center text-body-secondary">{title}</p>
        </footer>
    )
}

Footer.prototype = {
    title: PropTypes.string
}

export default Footer