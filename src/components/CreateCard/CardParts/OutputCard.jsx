import React from 'react';
import HeaderOutput from './Header/HeaderOutput';
import MsgOutput from './Message/MsgOutput';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';






const OutputCard = (props) => {

 const card = props.card.map((card) =>
    <Card key={card.id} id={card.id} className="text-center mt-5 shadow mx-auto bg-dark text-white">
        <HeaderOutput  title={props.endpoint ? card.title : card.name} />
        <Card.Body className="bg-danger">
                <MsgOutput  myId={card.id} open={props.endpoint ? false : true} text={props.endpoint ? card.description : card.url} />
        </Card.Body >
                                 <Card.Footer className="text-center small w-100" ><span className="font-italic">{props.endpoint ? card.rt_score : card.gender}{props.endpoint ? "%" : ""}</span> | <span className="font-italic">{props.endpoint ? card.release_date : card.age}</span> | <span className="font-italic">{props.endpoint ? card.producer : card.eye_color}{props.endpoint ? "" : " colored eyes"}</span> | <span className="font-italic">{props.endpoint ? card.producer : card.hair_color}{props.endpoint ? "" : " colored hair"}</span></Card.Footer>
    </Card>

    );
return(
<Col xs={10} md={8} className="justify-content-center mx-auto">
     {card}
  </Col>

    
  
  
      
);
}

export default OutputCard;