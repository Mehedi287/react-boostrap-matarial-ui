import React from 'react';

const Card = (props) => {
    const { title, description, urlToImage } = props.news
    return (


        <div className="col">
            <div className="card">
                <img src={urlToImage} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>




    );
};

export default Card;