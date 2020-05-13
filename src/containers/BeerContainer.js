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
    this.handleBeerSelected = this.handleBeerSelected.bind(this);
  }
    componentDidMount(){
      const url = 'https://api.punkapi.com/v2/beers';

      fetch(url)
        .then(res => res.json())
        .then(beers => this.setState({beers: beers}))
        .catch(err => console.error);
    }
    handleBeerSelected(index){
      const selectedBeer = this.state.beers[index];
      this.setState({currentBeer: selectedBeer})
    }


  render(){
    return (
      <div>
        <h2>Brewdog's Finest Kegs</h2>
        <BeerSelector beers={this.state.beers} onBeerSelected={this.handleBeerSelected}/>
        <BeerDetail beer={this.state.currentBeer}/>
      </div>
    )
  }



}

export default BeerContainer;
