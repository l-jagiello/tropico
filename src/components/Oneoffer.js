import React from 'react';

const Oneoffer = ({ title, description, imgSrc }) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
            <img src={imgSrc} alt={title} className="card-img-top"/>
                <div className="card-body">
                    <h2 className="fs-2 text-body-emphasis">{title}</h2>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Zobacz więcej</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Oneoffer;
