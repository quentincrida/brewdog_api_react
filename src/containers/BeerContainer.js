import React, {Component} from 'react';
import BeerSelector from '../components/BeerSelector';
import BeerDetail from '../components/BeerDetail';

class BeerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      currentBeer: null
    }
  }
    componentDidMount(){
      const url = 'https://api.punkapi.com/v2/beers';

      fetch(url)
        .then(res => res.json())
        .then(beers => this.setState({beers: beers}))
        .catch(err => console.error);
    }


  render(){
    return (
      <div>
        <h2>Beer Container</h2>
        <BeerSelector beers={this.state.beers}/>
        <BeerDetail />
      </div>
    )
  }



}

export default BeerContainer;
