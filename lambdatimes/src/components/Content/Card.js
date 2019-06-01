import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const SingleCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
  > div:nth-child(1) {
    font-size: 25px;
    font-family: Didot, serif;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    > div {
      padding-right: 10px;
      border-right: 1px solid lightgrey;
      height: 40px;
      img {
        width: 40px;
      }  
    }
    span {
      padding-left: 10px;
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
`;

const Card = props => {
  return (
    <SingleCard>
      <div>{props.card.headline}</div>
      <div>
        <div>
          <img src={props.card.img} alt={props.card.author}/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </SingleCard>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string,
    headline: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
