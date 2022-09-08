import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function InfoCard(props) {
  return (
    <div className={props.style}>
      <Card bg='dark' text='light' border='primary'>
        <Card.Img className='cards-images mt-3' variant="top" 
        src={props.imgUrl} alt={props.imgAlt}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
          <Button variant='outline-light'>Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default InfoCard;