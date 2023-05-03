import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import { useLoaderData } from 'react-router-dom';
import ChefCard from '../components/ChefCard';

const Chef = () => {
    const [chefData, setChefData] = useState([])
    useEffect(() => {
        fetch('https://assignment-chef-recipe-hunter-server-mehedihasanweb.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefData(data.chefs))
    }, [])
    // console.log(chefData);
    return (
        <Container>
            <h2 className='text-center text-bold text-warning fs-1 mt-5'>Chef Categories</h2>
            <Row xs={1} md={2} lg={3} className='g-4 mt-5'>
                {
                    chefData.map(data => <ChefCard
                        key={data.id}
                        data={data}
                    ></ChefCard>)
                }
            </Row>

        </Container>
    );
};

export default Chef;