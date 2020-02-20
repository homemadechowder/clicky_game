import React , {Component} from 'react';
import Radium from 'radium';
import Character from './Character';
import cards from '../cards';


class Body extends Component{
       
    state = {
        char: cards
    }
    
    

    setCards = cards =>{
        console.log("setting state with : "+ cards)
        this.setState({char: cards})
    
    }

        
    
    // shuffle(cards){
    //     var currentIndex = cards.length, temporaryValue, randomIndex;

    //     // While there remain elements to shuffle...
    //     while (0 !== currentIndex) {
      
    //       // Pick a remaining element...
    //       randomIndex = Math.floor(Math.random() * currentIndex);
    //       currentIndex -= 1;
      
    //       // And swap it with the current element.
    //       temporaryValue = cards[currentIndex];
    //       cards[currentIndex] = cards[randomIndex];
    //       cards[randomIndex] = temporaryValue;
    //     }
      
    //     return cards;
        
    // }

    onClick = event =>{
        
        event.preventDefault();
        console.log(this.state.char);
    }
    
    render(){
        return(
            <div className = 'container'>
                <div className = 'row'>                    
                    <div className = 'col-12'>
                        {this.state.char.map((char,i) =>(                    
                            <Character key = {i} image = {char.url} />                      
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(Body);