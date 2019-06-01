import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;

  }
  span:first-child {
    margin-left: 25px;
    flex: 1;

  }
  span:last-child {
    text-align: right;
    margin-right: 25px;
    flex: 1;
  }

`;

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = (props) => {
  return (
    <StyledHeader>
      <span>{props.date()}</span>
      <h1>Lambda Times</h1>
      <span>98°</span>
    </StyledHeader>
  )
}

Header.propTypes = {
  props: PropTypes.objectOf({
    date: PropTypes.func.isRequired,
  })
}

export default Header