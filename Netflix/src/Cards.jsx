import React from 'react';
import Images from './Images';
import Heading from './Heading';

function Card(props) {
    return(
      <>
      <div className="cards">
        <div className="card">
          <Images imgSrc={props.imgSrc}/>
          <div className="card_info">
          <span className="card_category">
            {props.title}
          </span>
          <Heading sname={props.sname}/>
          <a href={props.link} target="_blank"><button>Watch Now</button></a>
          </div>
        </div>
      </div>
      </>
    );
  }

  export { Card };