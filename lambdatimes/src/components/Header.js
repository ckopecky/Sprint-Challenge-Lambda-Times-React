import React from 'react';
import PropTypes from 'prop-types';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = (props) => {
  return (
    <div className="header">
      <span className="date">{props.date()}</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  )
}

Header.propTypes = {
  props: PropTypes.objectOf({
    date: PropTypes.func.isRequired,
  })
}

export default Header