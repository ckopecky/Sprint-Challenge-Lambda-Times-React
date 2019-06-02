import React, { Component } from 'react';
import styled from 'styled-components';

import { carouselData } from '../../data'
// Complete this Carousel 

const StyledCarousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > div {
      display: flex;
      justify-content: center;
      align-items: none;
      flex-direction: row;
      color: #fff;
      background-color: #333;
      font-size: 40px;
      border-radius: 50%;
      position: absolute;
      width: 50px;
      height: 50px;
      cursor: pointer;
      &:hover {
        color: #333;
        background-color: #fff;
        border: 2px solid #333;
      }
      &:first-child {
        top: 50%;
        left: 25px;
        transform: translate(0, -50%);
      }
      &:last-child {
        top: 50%;
        right: 25px;
        transform: translate(0, -50%);
      }
  }
  img {
    width: 100%;
    display: none;
  }

`






export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImg: [],
      selectedImg: ''
    }
  }
  componentDidMount(){
    this.setState({carouselImg: carouselData, selectedImg: carouselData[0]});
  }

  leftClick = () => {
    console.log("clicked")
    for (let i = 0; i < this.state.carouselImg.length; i++) {
      console.log(this.state.selectedImg[i]);
      if (this.state.selectedImg === this.state.carouselImg[i]) {
        if(i === 0) {
          this.setState({selectedImg: this.state.carouselImg[this.state.carouselImg.length - 1] })
          console.log(this.state.selectedImg)
        }
        else {
          this.setState({selectedImg: this.state.carouselImg[i - 1]});
          console.log(this.state.selectedImg)

  }
      }
    }
  }

  rightClick = () => {
    console.log(this.state.selectedImg)
    for (let i = 0; i < this.state.carouselImg.length; i++) {
      if (this.state.selectedImg === this.state.carouselImg[i]) {
        if(i === this.state.carouselImg.length - 1) {
          this.setState({selectedImg: this.state.carouselImg[0] })
        } 
        else {
          this.setState({selectedImg: this.state.carouselImg[i + 1]});
        }
      }
    }
  }

  selectedImage = () => {
    return <img src={this.state.selectedImg.image} alt={this.state.selectedImg.alt} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <StyledCarousel>
        <div onClick={this.leftClick}>{"<"}</div>
          {this.selectedImage()}
        <div onClick={this.rightClick}>{">"}</div>
      </StyledCarousel>
    )
  }
}