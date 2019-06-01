import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
  >div {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    > span:first-child {
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
`

const Tabs = props => {
  return (
    <StyledTabs>
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
    </StyledTabs>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.oneOf(['all', 'javascript', 'bootstrap', 'node', 'React.js', 'technology']))
}


// Make sure to use PropTypes to validate your types!
export default Tabs;
