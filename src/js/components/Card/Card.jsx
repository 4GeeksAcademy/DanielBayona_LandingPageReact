import React from "react";
import "./Card.css"
import PropTypes from 'prop-types';

const Card = ({title,body,button, image}) =>{
    return(
        <div className="card">
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">{button}</a>
            </div>
        </div>
    )
}

Card.prototype = {
    title: PropTypes.string,
    body: PropTypes.string,
    button: PropTypes.string,
    image: PropTypes.string,
}

export default Card