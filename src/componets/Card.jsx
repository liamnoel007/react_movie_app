import React from 'react';
import './Card.css';

const Card = ({ name, image, year, rating, genre }) => {
  return (
    <>
      <div className="card">
        <div className="card_wrap">
          <div className="card_poster">
            <a href="/">
              <img src={image ? image : require('../assets/images/poster.jpg')} alt="" />
              <div className="card_rating">
                <span>{rating}</span>
              </div>
            </a>
          </div>
          <div className="card_info">
            <p>{name ? name : 'Мстители'}</p>
            <div className="card_film_date">
              <p>{genre}</p>
              <span>{year}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
