import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefIDetail = () => {
    const chefData = useLoaderData()
    // console.log(chefData);
    const { description, experience, name, total_recipes, recipes, id, image_url, likes } = chefData
    return (
        <div className='mb-5'>
            <div className='image '>
                <Container className='text-warning d-flex  align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <Image src={image_url} roundedCircle />
                        <div className='ms-3'>
                            <h3>Name: {name}</h3>
                            <h3>Experience: {experience}</h3>
                        </div>
                    </div>
                    <div>
                        <h4>Total Recipe: {total_recipes}</h4>
                        <h4>Likes: {likes}</h4>
                    </div>
                </Container>
                <h4>Description: <small>{description}</small></h4>
            </div>
            <Container className='mt-5'>
                    <h3 className='fs-1 text-center text-bold my-5' >Recipe Category</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        recipes.map((recipe, idx) => <RecipeCard key={idx} recipe={recipe}></RecipeCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ChefIDetail;