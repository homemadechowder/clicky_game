import React, { Component } from "react";
import Scorekeep from "./Scorekeep";
import Body from "./Body";
import Banner from "./Banner";

class Main extends Component{

    state = {
        score: 0,
        hiscore: 0
    }
    render(){
        return(
            <div className = "wrapper">
            <Scorekeep score = {this.state.score} hiscore = {this.state.hiscore} />
            <Banner />
            <Body />
            </div>
        )
    }
}

export default Main;