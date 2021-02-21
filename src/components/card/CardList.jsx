import React from 'react';
import './CardList.css';

import CardItem from './CardItem';

const cardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <CardItem key={monster.id} monster={monster} />
    ))}
  </div>
);

export default cardList;
