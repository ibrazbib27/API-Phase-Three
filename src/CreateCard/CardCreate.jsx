import React, {Component} from 'react';
import OutputCard from './CardParts/OutputCard';
import 'isomorphic-fetch';
import 'es6-promise';



class CardCreate  extends Component{
    constructor(){
        super();
        this.state = {
           cardDetails: []
           
        }

 

    }
    
         componentDidMount(){
             let arr = [];
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res =>  res.json())
            .then(obj => {
            obj.forEach( (val) => {
                arr.push(val);
            })
             this.setState({
                cardDetails: arr
            })
        });
     
    }
      

render(){


 
return(  
   <React.Fragment>

  <OutputCard card={this.state.cardDetails} />
        
    </React.Fragment>
);
}
}

export default CardCreate;