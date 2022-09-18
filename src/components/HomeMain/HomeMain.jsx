import React from 'react';
import './homeMain.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavMenu from './NavMenu/NavMenu';
import HomeContent from './HomeContent/HomeContent';

const HomeMain = () => {
    return (
        <Container className='homeMainPage' fluid>
            <Row>
                <Col md={3}><NavMenu /></Col>
                <Col md={9}><HomeContent /></Col>
            </Row>
        </Container>
    )
}

export default HomeMain;