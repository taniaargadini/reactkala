import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards_btns' >
          <ul className='cards__items'>
            <CardItem
              src='images/testing2.png'
              text='Desc avatar'
              
            />
            <CardItem
              src='images/testing2.png'
              text='Desc avatar'
              
            />
            <CardItem
              src='images/testing2.png'
              text='Desc avatar'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/testing2.png'
              text='Desc avatar'
              
            />
            <CardItem
              src='images/testing2.png'
              text='Desc avatar'
           
              
            />
            <CardItem
              src='images/testing2.png'
              text='Desc avatar'
              
            />
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
