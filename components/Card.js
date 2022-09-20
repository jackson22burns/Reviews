import React from 'react';

export function Card({card}) {
  const {p_name, p_type, p_genre, score} = card;
    return (
      <div className='card'>
        <br/>
        <h2 className='name-field'>{p_name}</h2>
        <br/>
        <p>{p_type}</p>
        <p> Genre: {p_genre}</p>
        <p >Rating: {score}</p>
      </div>
    );
  }
