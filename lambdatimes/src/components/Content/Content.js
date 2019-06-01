import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = () => {
    return this.state.selected === 'all' ? this.state.cards : this.state.cards.filter(card => {
      return card.tab === this.state.selected;
    })
  };

  render() {
    return (
      <div className="content-container">
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab={this.state.selected}
          handleSelectTab={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
