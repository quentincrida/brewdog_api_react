import React from 'react';

const BeerDetail = (props) => {
  if(!props.beer) return null;
  return (
    <h3>{props.beer.name}</h3>
  )

}

export default BeerDetail;
