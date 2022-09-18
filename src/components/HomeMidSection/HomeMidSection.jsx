import React from 'react';
import './homemidSection.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import redArrow from '../../assests/red_arrow.png';
import midSectionImg from '../../assests/midSectionImg.jpg';

const HomeMidSection = () => {
    return (
        <Container className='homeMidSection' fluid>
            <p className='midSectionMainTitle m-0'>Why We Matter?</p>
            <img src={redArrow} alt="redArrow" />
            <Row>
                <Col md={7}>
                    <p className='midSectionLeftTitle'>Creative Thinking for Creating an impact!</p>
                    <p className='midSectionLeftPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minus sed? Dicta dignissimos magnam natus eos unde nesciunt, asperiores, dolore quod sit, quisquam voluptatibus! Voluptas unde incidunt omnis aperiam dolore reprehenderit error sunt harum recusandae cupiditate aspernatur temporibus itaque a corporis odit, nobis ipsam perferendis illo voluptates ea repudiandae! Optio consequuntur obcaecati amet iste consectetur doloremque, reprehenderit quos nam commodi oritatis numquam esse doloremque.</p>
                </Col>
                <Col md={5}>
                    <img src={midSectionImg} alt="lab_image" />
                </Col>
            </Row>
            <button className='goToCommunityBtn border' size="lg"><span className='goToCommunityBtnTxt'>Join Our Community <BsArrowRight /></span></button>
        </Container>
    )
}

export default HomeMidSection