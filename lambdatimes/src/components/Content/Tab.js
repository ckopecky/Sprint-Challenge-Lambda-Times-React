import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`

const ActiveTab = styled(StyledTab)`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`

const Tab = props => {
  return props.tab === props.selectedTab ?
 (
    <ActiveTab onClick={() => {
      props.handleSelectTab(props.tab)
   }}>
   {props.tab.toUpperCase()}
   </ActiveTab>
  ) :
  (
    <StyledTab
      onClick={() => {
         props.handleSelectTab(props.tab)
      }}>
      {props.tab.toUpperCase()}
    </StyledTab>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string.isRequired
}

export default Tab;
