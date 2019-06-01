import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

const App = () => {
  let date = new Date();
  const getDateString = () => {
    let current = date.toLocaleDateString()
    return current;
  }
  return (
    <div className="App">
      <TopBar />
      <Header date={getDateString}/>
      <Content />
    </div>
  );
}

export default App;
