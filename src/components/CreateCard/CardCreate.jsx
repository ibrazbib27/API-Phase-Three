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
            end: false,
            cardDetails: []
           
        }
this.loadNewCards = this.loadNewCards.bind(this);
        this.filmClick = this.filmClick.bind(this);
 
this.getClicked = this.getClicked.bind(this);
    }
    
    loadNewCards(endpoint) {
             let arr = [];
        fetch("https://ghibliapi.herokuapp.com/"+endpoint +"")
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
   filmClick() {
       this.setState({
                end: true
            });
   }
       peopleClick() {
       this.setState({
                end: false
            });
   }
getClicked(){
 
    let arr = [...this.state.cardDetails];
   arr.forEach( (val) => {
             document.getElementById(val.id).getElementsByClassName("font-italic")[0].click();
            })
   
}

render(){

 
return(  
   <Container>
  <Row className="w-100">
   
      <Button onClick={() => {
              this.filmClick();
              this.loadNewCards("films");
          }
                      } variant="dark" className="shadow w-75 mx-auto"> <Row className="w-100 justify-content-between"><Col xs={6} className="w-75">Loading Films...</Col>
          <Col xs={2} className="w-100" ><Image src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" className="" width={50} rounded /></Col></Row></Button> </Row>
        
        
    <Row className="w-100 mt-2">
   
      <Button onClick={() => {
              this.peopleClick();
              this.loadNewCards("people");
              setTimeout(this.getClicked,1000);
          }
                      } variant="secondary" className="shadow w-75 mx-auto"> <Row className="w-100 justify-content-between"><Col xs={6} className="w-75">Loading People...</Col>
          <Col xs={2} className="w-100" ><Image src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" className="" width={50} rounded /></Col></Row></Button> </Row>
  <OutputCard card={this.state.cardDetails} endpoint={this.state.end ? true : false} />
        
    </Container>
);
}
}

export default CardCreate;