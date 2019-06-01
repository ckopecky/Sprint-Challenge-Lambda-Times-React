import React, { Component } from 'react';
import styled from 'styled-components';

import Tabs from './Tabs';
import Cards from './Cards';


// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

const StyledContent = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs: tabData, cards: cardData });
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({selected: tab});
  };

  filterCards = () => {
    return this.state.selected === 'all' ? this.state.cards : this.state.cards.filter(card => {
      return card.tab === this.state.selected;
    })
  };

  render() {
    return (
      <StyledContent>
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab={this.state.selected}
          handleSelectTab={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </StyledContent>
    );
  }
}

export default Content;
