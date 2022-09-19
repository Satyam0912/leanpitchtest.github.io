import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import CardComponent from '../../Card/CardComponent'
import img1 from '../../../assests/certificate1.png'
import img2 from '../../../assests/certificate2.png'
import img3 from '../../../assests/certificate3.png'


const SpeakSeries = () => {

    const [speakSeriesContent, setSpeakSeriesContent] = useState([
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
        <Container className='speakSeriesSection mt-5' fluid>
            <h1 className='speakSeriesTitle mb-2'>PM Speak Series</h1>
            <div className='speakSeries d-flex'>
                {
                    speakSeriesContent.map((singleObj, index) => {
                        return <CardComponent name={singleObj.name} imgSrc={singleObj.imgSrc} key={index} />
                    })
                }
            </div>
        </Container>
    )
}

export default SpeakSeries