import React from "react";
import "./Jumbotron.css"
import PropTypes from 'prop-types';

const Jumbotron = (prop) =>{
    return(
        <div className="contianer mt-5 ">
            <div className="row justify-content-center ">
                <div className="col-md-8 col-lg-12 p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">{prop.title}</h1>
                        <p className="col-lg-12 col-md-8 fs-4">{prop.text}</p>
                        <button className="btn btn-primary btn-lg" type="button">{prop.textButton}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Jumbotron.propTypes ={
    title: PropTypes.string,
    text: PropTypes.string,
    textButton: PropTypes.string
}

export default Jumbotron;