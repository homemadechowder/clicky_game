import React , {Component} from 'react';
import Radium from 'radium';
import Character from './Character';
import cards from '../cards';
import Scorekeep from "./Scorekeep";
import Banner from "./Banner";


class Body extends Component{
       
    state = {
        char: cards,
        score: 0,
        hiscore: 0,
    }
    
    

    setCards = cards =>{
        console.log("setting state with : "+ cards)
        this.setState({char: cards})
    
    }

        

    shuffle = () =>{  
        
        var currentIndex = cards.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = cards[currentIndex];
          cards[currentIndex] = cards[randomIndex];
          cards[randomIndex] = temporaryValue;
        }
        
        this.setState({char: cards})
        console.log(cards);
        

    }
    
    isClickedFlag = (id) =>{
        const check = this.state.char;
        
        if (check[id].isClicked === 0){
            this.setState({score: this.state.score+1})
            this.setState({message: "You guessed correctly"})
            check[id].isClicked = 1;
            
            this.setState({char:check})
            
            if(this.state.hiscore <= this.state.score){
                this.setState({hiscore: this.state.hiscore + 1})

                if(this.state.score === 16){
                    alert("You won, refresh?");
                }
            
            }
        }  
        else {
            this.setState({message: "You guessed incorrectly"})
        }
        
        
    }
    render(){
        return(
            <div className = "wrapper">
            <Banner />
            <Scorekeep message = {this.state.message} score = {this.state.score} hiscore = {this.state.hiscore}/>
            
            <div className = 'container'>
                <div className = 'row'>                    
                    <div className = 'col-12'>
                        {this.state.char.map((char,i) =>(                    
                            <Character 
                            shuffle = {this.shuffle}
                            clicked = {this.isClickedFlag} 
                            flag = {char.isClicked} 
                            id = {char.id} 
                            key = {i} 
                            image = {char.url} />                      
                        ))}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Radium(Body);