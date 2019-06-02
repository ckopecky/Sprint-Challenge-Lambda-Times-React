import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

  }

  leftClick = () => {

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
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}