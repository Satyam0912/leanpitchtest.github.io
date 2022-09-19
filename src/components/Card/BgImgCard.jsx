import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

const BgImgCard = ({ name, imgSrc, bgImgSrc }) => {

    return (
        <Container className='bgImgCard' style={{ backgroundImage: bgImgSrc }}>
            <Card style={{ width: '18rem' }} className='m-2'>
                <Card.Body>
                    <img src={imgSrc} alt="" height={50} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default BgImgCard