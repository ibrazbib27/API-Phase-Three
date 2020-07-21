import React from 'react';
import Card from 'react-bootstrap/Card';


const HeaderOutput = (props) => {

 
return(
   
  <Card.Header className="h4">{props.title}</Card.Header>
 
);
}

export default HeaderOutput;