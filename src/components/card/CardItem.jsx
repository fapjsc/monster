import React from 'react';
import './CardItem.css';

const cardItem = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set${props.monster.id}&size=180x180`}
      alt="monster"
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

export default cardItem;
