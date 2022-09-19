import React from 'react'
import './videoBlogPodcast.css';
import { Container } from 'react-bootstrap'
import Blogs from './Blogs/Blogs'
import Podcasts from './Podcasts/Podcasts'
import SpeakSeries from './SpeakSeries/SpeakSeries'
import Videos from './Videos/Videos'

const VideoBlogPodcast = () => {
    return (
        <Container className='videoBlogPodcast p-5' fluid>
            <Videos />
            <SpeakSeries />
            <Blogs />
            <Podcasts />
        </Container>
    )
}

export default VideoBlogPodcast