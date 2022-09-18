import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CardComponent from '../../Card/CardComponent'
import img1 from '../../../assests/certificate1.png';
import img2 from '../../../assests/certificate2.png';
import img3 from '../../../assests/certificate3.png';

const Webnars = () => {
    const [webnarContent, setWebnarContent] = useState([
        { name: 'Title1', imgSrc: img1 },
        { name: 'Title2', imgSrc: img2 },
        { name: 'Title3', imgSrc: img3 }
    ])
    return (
        <Container className='webnarSection mt-5' fluid>
            <h1 className='webnarTitle mb-4'>Our Webnars</h1>
            <div className='mb-4 border border-dark m-auto' style={{ width: 'fit-content' }}>
                <a href='#upcomingWebnars' className='btn'>Upcoming</a>
                <a href='#pastWebnars' className='btn btn-dark'>Past</a>
            </div>
            <div className='webnars d-flex'>
                {
                    webnarContent.map((singleObj, index) => {
                        return <CardComponent name={singleObj.name} imgSrc={singleObj.imgSrc} key={index} />
                    })
                }
            </div>
        </Container>
    )
}

export default Webnars