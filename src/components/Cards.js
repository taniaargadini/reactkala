import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Pick Your Character Here!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards_btn' >
          <ul className='cards__items'>
            <CardItem
              src='images/testing2.png'
              text='Desc avatar'
              link='/fbx/ava1.fbx'
            />
            <CardItem
              src='images/testing2.png'
              text='Desc avatar'
              link='/fbx/ava2.fbx'
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
