import React from 'react';
import './labComponent.css'
import { Container, Row, Col } from 'react-bootstrap';
import labImg from '../../assests/labImg.png';
import { BsArrowRight } from 'react-icons/bs';

const LabComponent = () => {
    return (
        <Container className='labComponent bg-dark text-white' fluid>
            <Row>
                <Col md={6} className='labLeft p-4'>
                    <h1 className='labTitle'>Leanpitch Thinking Labs</h1>
                    <br />
                    <div className="labParagraph">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum, quam quidem accusamus error dolores sed aut ducimus labore odit officiis explicabo cupiditate amet accusantium sunt, rem maiores. Harum temporibus dignissimos similique eius quia? Molestiae alias nesciunt repudiandae atque deserunt consectetur adipisci aliquam architecto optio temporibus cupiditate, tempora nihil, corporis ad laboriosam animi natus pariatur non. Itaque ullam maiores.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum, quam quidem accusamus error dolores sed aut ducimus labore odit officiis explicabo cupiditate amet accusantium sunt, rem maiores. Harum temporibus dignissimos similique eius quia? Molestiae alias nesciunt repudiandae atque deserunt consectetur adipisci aliquam architecto optio temporibus cupiditate, tempora nihil, corporis ad laboriosam animi natus pariatur non. Itaque ullam maiores.</p>
                        <h4>Share your interest by submitting your details we will get back to you with more information.</h4>
                    </div>
                    <div className="labbtnSection mt-5 ms-5">
                        <button className='border border-danger ms-5'>View Details <BsArrowRight /></button>
                        <button className='border border-danger ms-5'>Register Now <BsArrowRight /></button>
                    </div>
                </Col>
                <Col md={6} className='labRight'>
                    <img src={labImg} alt="lab_image" />
                </Col>
            </Row>
        </Container>
    )
}

export default LabComponent