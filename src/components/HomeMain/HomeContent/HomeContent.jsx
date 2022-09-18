import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from '../../Card/CardComponent';
import img1 from '../../../assests/certificate1.png';
import img2 from '../../../assests/certificate2.png';
import img3 from '../../../assests/certificate3.png';

const HomeContent = () => {
    const [contents, setContents] = useState([
        { name: 'Title1', imgSrc: img1 },
        { name: 'Title2', imgSrc: img2 },
        { name: 'Title3', imgSrc: img3 },
        { name: 'Title4', imgSrc: img1 },
        { name: 'Title5', imgSrc: img2 },
        { name: 'Title6', imgSrc: img3 }
    ])
    return (
        <Container className='homeContent border border-warning m-5' >
            <Row>
                <Col className='d-flex flex-wrap m-2'>
                    {
                        contents.map((singleObj, index) => {
                            return <CardComponent name={singleObj.name} key={index} imgSrc={singleObj.imgSrc} />
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default HomeContent