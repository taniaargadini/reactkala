import React from 'react';
import './Cards.css';


function PickName(props) {
  return (
    <>
    <div className='wrapper'></div>
      <li className='picks__item'>
          <div className='picks__item__info'>
            <h5 className='picks__item__text'>{props.text}</h5>
            <div className='picks__item__input'> {props.input}
            <input id="input" />
          </div>    
          <div className="picks-btn">{props.btn}
          </div>     
          <button
          >
         <a href={process.env.PUBLIC_URL + props.input} download>Submit</a>      
          </button> 
          </div>   
      </li>
     </>
  );
}

export default PickName;