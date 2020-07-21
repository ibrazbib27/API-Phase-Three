import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const MsgOutput = (props) => {

 
return(

       <Row className="my-5">
            <Col xs={12}  >
          
               <section >
                   <p className="font-italic">{props.text}</p>
               </section>
          
             </Col>
      </Row>
 
);
}

export default MsgOutput;