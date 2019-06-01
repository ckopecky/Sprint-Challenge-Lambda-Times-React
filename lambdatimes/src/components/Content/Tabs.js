import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            
            {props.tabs.map(item => {
              return <Tab 
                        key={item}
                        tab={item} 
                        handleSelectTab={props.handleSelectTab}
                        selectedTab={props.selectedTab}
                     />
            })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.oneOf(['all', 'javascript', 'bootstrap', 'node', 'React.js', 'technology']))
}


// Make sure to use PropTypes to validate your types!
export default Tabs;
