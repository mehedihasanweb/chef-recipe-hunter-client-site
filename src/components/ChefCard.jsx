import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ data }) => {
  const { id, experience, image_url, likes, name, total_recipes } = data
  return (
    <Card className=''>
      <LazyLoad>
      <Card.Img style={{ height: '250px' }}  src={image_url} />
      </LazyLoad>
      
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