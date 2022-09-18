import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import CardComponent from '../../Card/CardComponent';
import img1 from '../../../assests/certificate1.png';
import img2 from '../../../assests/certificate2.png';
import img3 from '../../../assests/certificate3.png';

const Trainings = () => {
    const [trainingContent, setTrainingContent] = useState([
        { name: 'Title1', imgSrc: img1 },
        { name: 'Title2', imgSrc: img2 },
        { name: 'Title3', imgSrc: img3 },
        { name: 'Title4', imgSrc: img1 },
        { name: 'Title5', imgSrc: img2 },
        { name: 'Title6', imgSrc: img3 },
        { name: 'Title7', imgSrc: img1 },
        { name: 'Title8', imgSrc: img2 },
        { name: 'Title9', imgSrc: img3 }
    ])
    return (
        <Container className='trainingSection mt-3' fluid>
            <h1 className='trainingTitle mb-4'>Our Trainings</h1>
            <div className='trainings d-flex'>
                {
                    trainingContent.map((singleObj, index) => {
                        return <CardComponent name={singleObj.name} imgSrc={singleObj.imgSrc} key={index} />
                    })
                }
            </div>
        </Container>
    )
}

export default Trainings