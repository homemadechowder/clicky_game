import React , {Component} from 'react';
import Radium from 'radium';
import cards from '../cards';


const cardStyle = {
    base:{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        border: '10px white solid',
        transition: 'transform .2s',
        height: '200px',
        width: '200px',
        ':hover':{
            transform: 'scale(1.2)'
        }
    }
}

const imgStyle = {
    base: {
        objectFit: 'cover'
    }
}

class Body extends Component{
       
    state = {
        cards: [
            {
                url: '../characters/babyyoda.jpg',
                isClicked: 0
            },
            {
                url: '../characters/cad.png',
                isClicked: 0
            },
            {
                url: '../characters/cena.jpg',
                isClicked: 0
            },
            {
                url: '../characters/darthvader.jpeg',
                isClicked: 0
            },
            {
                url: '../characters/grievous.jpg',
                isClicked: 0
            },
            {
                url: '../characters/jyn.jpg',
                isClicked: 0
            },
            {
                url: '../characters/kirk.jpg',
                isClicked: 0
            },
            {
                url: '../characters/kylo.png',
                isClicked: 0
            },
            {
                url: '../characters/luke.jpg',
                isClicked: 0
            },
            {
                url: '../characters/mas.jpg',
                isClicked: 0
            },
            {
                url: '../characters/maul.png',
                isClicked: 0
            },
            {
                url: '../characters/obi.jpg',
                isClicked: 0
            },
            {
                url: '../characters/palpatine.jpg',
                isClicked: 0
            },
            {
                url: '../characters/rey.png',
                isClicked: 0
            },
            {
                url: '../characters/snowtrooper.jpg',
                isClicked: 0
            },
            {
                url: '../characters/solo.jpg',
                isClicked: 0
            }   
        ]  
    }
    
    componentDidMount(){

        console.log(this.state.cards);
    }

    // setCards(cards){
    //     this.setState({cards: cards})
    // }

    
    
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
        this.attr('clicked')
    }
    
    render(){
        return(
            <div className = 'container'>
                <div className = 'row'>
                    
                    <div className = 'col-3'>
                        {this.state.cards.map((image,i) =>(
                        <div style = {cardStyle.base} key = {i}className = 'card'>
                            <img class="card-img-top" src={require( {image.url} )} alt="Card"></img>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(Body);