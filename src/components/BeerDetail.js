import React from 'react';

const BeerDetail = (props) => {
  if(!props.beer) return null;
  return (
    <div>
      <h2>Name: {props.beer.name}</h2>
      <h3>What am I like? "{props.beer.tagline}"</h3>
      <p>Tasting notes: "{props.beer.description}"</p>
      <img src="https://images.punkapi.com/v2/keg.png" alt="keg image"/>
    </div>
  )

}

export default BeerDetail;
