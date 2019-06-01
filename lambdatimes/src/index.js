import React from 'react';
import ReactDOM from 'react-dom';
// import './CSS/index.css';
import styled from 'styled-components';
import App from './App';

const WrapperComponent = styled.body`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
    * {
        box-sizing: border-box;
    }
`

ReactDOM.render(
<WrapperComponent>
    <App />
</WrapperComponent>, document.getElementById('root'));
