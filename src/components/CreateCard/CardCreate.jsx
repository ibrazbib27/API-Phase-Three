import React, {Component} from 'react';
import OutputCard from './CardParts/OutputCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import 'isomorphic-fetch';
import 'es6-promise';



class CardCreate  extends Component{
    constructor(){
        super();
        this.state = {
            renderFilms: false,
            cardDetails: []
           
        }
this.handleButtonClick = this.handleButtonClick.bind(this);
 

    }
    
    componentDidMount() {
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
handleButtonClick = () =>{
    this.setState({
                renderFilms: true
            })
}   

render(){

 
return(  
   <Container>
  <Row className="w-100">
   
      <Button onClick={this.handleButtonClick} variant="dark" className="shadow w-75 mx-auto"> <Row className="w-100 justify-content-between"><Col xs={6} className="w-75">Loading Films...</Col>
          <Col xs={2} className="w-100" ><Image src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" className="" width={50} rounded /></Col></Row></Button> </Row>
  {this.state.renderFilms ? <OutputCard card={this.state.cardDetails} /> : null}
        
    </Container>
);
}
}

export default CardCreate;