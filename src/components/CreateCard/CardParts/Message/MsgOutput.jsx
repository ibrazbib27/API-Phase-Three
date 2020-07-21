import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function onPeopleClick (thisClick, url){
    window.open(url, '_blank');
}

const MsgOutput = (props) => {
    

 
return(

       <Row className="my-5">
            <Col xs={12}  >
          
               <section >
                   <p  onClick={props.open ? (e) =>{onPeopleClick(e.target, props.text);} : () =>{}}className="font-italic">{props.text}</p>
               </section>
          
             </Col>
      </Row>
 
);
}

export default MsgOutput;