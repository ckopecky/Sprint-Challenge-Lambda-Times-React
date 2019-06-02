import React from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const App = () => {
  let date = new Date();
  const getDateString = () => {
    let current = date.toLocaleDateString()
    return current;
  }
  return (
    <AppWrapper>
      <TopBar />
      <Header date={getDateString}/>
      <Carousel />
      <Content />
    </AppWrapper>
  );
}

export default App;
