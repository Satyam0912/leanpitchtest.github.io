import React, { useState } from 'react'
import VideoComponent from '../../VideoComponent/VideoComponent';
import { Container } from 'react-bootstrap';
import vid1 from '../../../assests/BubbleVid1.mp4';
import vid2 from '../../../assests/BubbleVid2.mp4';

const Videos = () => {
    const [videosContent, setVideosContent] = useState([
        { name: 'Video Title 1', vidUrl: vid1 },
        { name: 'Video Title 2', vidUrl: vid2 },
        { name: 'Video Title 3', vidUrl: vid1 },
        { name: 'Video Title 4', vidUrl: vid2 },
        { name: 'Video Title 5', vidUrl: vid1 },
        { name: 'Video Title 6', vidUrl: vid2 }
    ])
    return (
        <Container className='videosSection mt-3' fluid>
            <h1 className='videosTitle'>Videos</h1>
            <div className='videos d-flex'>
                {
                    videosContent.map((singleObj, index) => {
                        return <VideoComponent name={singleObj.name} vidSrc={singleObj.vidUrl} key={index} />
                    })
                }
            </div>
        </Container>
    )
}

export default Videos