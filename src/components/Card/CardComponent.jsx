import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = ({ name }) => {

    const randColor = () => {
        return `rgb(${Math.random() * 155 + 50},${Math.random() * 155 + 50},${Math.random() * 155 + 50})`
    }

    return (
        <Card style={{ width: '18rem', backgroundColor: randColor() }} className='m-2'>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent