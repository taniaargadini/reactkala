import React from 'react';
import '../App.css';
import './PickAvatar.css';


function PickAvatar(props) {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>What are you waiting for?</h1>
      <p></p>
      <div className='cards__item__link' to={props.path}>
      <div className='cards__item__info'>
      <h5 className='cards__item__text'>{props.text}</h5>
          </div>  
          <div className="cards-btn">{props.btn}
          <div className='input-areas'> {props.input}
          <form>
            <input
              className='footer-input'
              name='name'
              type='text'
              placeholder='Your Name'
            />
            <button
          >
         <a href={process.env.PUBLIC_URL + props.input} download>Submit</a>      
          </button> 
          </form>
        </div>
    </div>
    </div>
    </div>
  );
}

export default PickAvatar;
