import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardComponent from '../../Card/CardComponent'

const HomeContent = () => {
    const [contents, setContents] = useState(['satyam', 'manish', 'abhishek', 'sachin', 'atul', 'sanjay'])
    return (
        <Container className='homeContent border border-warning' >
            <Row>
                <Col className='d-flex flex-wrap m-2'>
                    {
                        contents.map((name, index) => {
                            return <CardComponent name={name} key={index} />
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default HomeContent