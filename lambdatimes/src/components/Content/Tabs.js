import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log(props);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) =>
            
              <Tab 
              key={index}selectedTabHandler={props.selectedTabHandler} 
              selectedTab={props.selectedTab} 
              tab={tab}/>
            
        )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeSelected: PropTypes.func.isRequired
}
export default Tabs;
