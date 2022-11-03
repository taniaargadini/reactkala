import React from 'react';
import './Cards.css';


function CardItem(props) {
  return (
    <>
    <div className='wrapper'></div>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
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
          <div className="cards-btn">{props.btn}
          </div>     
          <button
          >
          <a href={process.env.PUBLIC_URL + props.link} download>Pick Avatar</a>      
          </button> 
          
          
        </div>     
      </li>
     </>
  );
}

export default CardItem;