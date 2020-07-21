import React from 'react';
import HeaderOutput from './Header/HeaderOutput';
import MsgOutput from './Message/MsgOutput';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';






const OutputCard = (props) => {

 const card = props.card.map((card) =>
    <Card key={card.id} id={card.id} className="text-center mt-5 shadow mx-auto bg-dark text-white">
        <HeaderOutput  title={card.title} />
        <Card.Body className="bg-danger">
                <MsgOutput text={card.description} />
        </Card.Body >
                                 <Card.Footer className="text-center small w-100" ><span className="font-italic">{card.rt_score}%</span> | <span className="font-italic">{card.release_date}</span> | <span className="font-italic">{card.producer}</span> | <span className="font-italic">{card.director}</span></Card.Footer>
    </Card>

    );
return(
<Col xs={10} md={8} className="justify-content-center mx-auto">
     {card}
  </Col>

    
  
  
      
);
}

export default OutputCard;