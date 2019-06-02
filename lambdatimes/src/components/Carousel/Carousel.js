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