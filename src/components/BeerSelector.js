import React from 'react';

const BeerSelector = (props) => {

  const options = props.beers.map((beer, index) => {
    return <option value={index} key={index}>{beer.name}</option>

  })

  function handleChange(event) {
    props.onBeerSelected(event.target.value);
  }
  return (
    <select name="beer-selector" id="beer-selector" onChange={handleChange}>
        <option disabled value="default">Choose a Beer...</option>
        {options}
    </select>
  )

}

export default BeerSelector;
