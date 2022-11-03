import React from 'react';
import './Picks.css';
import PickName from './PickName';

function Picks() {
  return (
    <div className='picks'>
      <h1>Pick Your Character Here!</h1>
      <div className='picks__container'>
        <div className='picks__wrapper'>
          <div className='picks_btn' >
          <ul className='picks__items'>
            <PickName
              src=''
              text=''
              link='/info.txt'
            />
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picks;
