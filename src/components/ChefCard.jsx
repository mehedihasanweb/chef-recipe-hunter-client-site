import React from 'react';
// import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const ChefCard = ({ data }) => {
  const { id, experience, image_url, likes, name, total_recipes } = data
  return (
    <Card className=''>
      <Card.Img style={{ height: '250px' }} loading="lazy" src={image_url} />
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>Experience: {experience}</Card.Text>
        <Card.Text>Total Recipe: {total_recipes}</Card.Text>
        <Card.Text>Likes: {likes}</Card.Text>
      </Card.Body>
      <Link to={`/recipe/${id}`}><button className='btn btn-outline-warning'>View Recipe</button></Link>
    </Card>
  );
};

export default ChefCard;