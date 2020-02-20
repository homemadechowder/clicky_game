import React ,{Component} from 'react';
import Radium from 'radium';

const cardStyle = {
    base:{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        border: '10px white solid',
        transition: 'transform .2s',
        ':hover':{
            transform: 'scale(1.2)'
        }


    }
}

class Body extends Component{
    
   
    state = {

    }

    componentDidMount(){

    }
    cardShuffle

    onClick = event =>{
        
        event.preventDefault();

    }
    
    render(){
        return(
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-3'>
                        <div style = {cardStyle.base} className = 'card'>
                            <img class="card-img-top" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/46226824_1994880900811647_7032976709175476224_n.jpg?_nc_cat=100&_nc_ohc=eXMvGaSg4-EAX_s4kwx&_nc_ht=scontent-sjc3-1.xx&oh=534ca856e59c88cdb4f84058a150904d&oe=5EFE14B3" alt="Card"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(Body);