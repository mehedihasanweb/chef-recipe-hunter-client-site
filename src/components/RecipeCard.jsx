import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({recipe}) => {
    // console.log(recipe);
    const [isFavorite, setIsFavorite] = useState(false)
    
    const handleFavorite =() =>{
        if(!isFavorite){
            setIsFavorite(true)
            toast("Your Favorite Recipe Added")
        }
    }

    const {name,image, rating,cooking_method,ingredients} = recipe
    return (
        <Card className=''>
            <Card.Img style={{height: '200px'}} src={image} />
            <Card.Body>
              <Card.Title>Name: {name}</Card.Title>
              <Card.Text>
                <h4>Ingredients:</h4>
                {
                    ingredients.map((i, idx) => <li key={idx}>{i}</li>)
                }
              </Card.Text>
              <Card.Title>Cooking Method: {cooking_method}</Card.Title>
              <Card.Title>Rating: {rating}</Card.Title>
            </Card.Body>
            <button onClick={handleFavorite} disabled={isFavorite} className='btn btn-outline-warning'>Favorite Recipe</button>
            <ToastContainer />
          </Card>
    );
};

export default RecipeCard;