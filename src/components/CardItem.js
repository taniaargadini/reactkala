import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt=""
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <div className='hero-btns'></div>
          <button 
          > 
          <a href="public/fbx/Unarmed Walk Forward.fbx" download="Kala.fbx">Pick Avatar</a>
        </button>
        </Link>
      </li>
    </>
  );
}

export default CardItem;