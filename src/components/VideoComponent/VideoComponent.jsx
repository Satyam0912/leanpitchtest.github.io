import React from 'react'
import { Container } from 'react-bootstrap'

const VideoComponent = ({ name, vidSrc }) => {
  return (
    <Container className='videoComponent'>
      <video src={vidSrc} type="video/mp4" width={320} height={240} controls>
      </video>
      {
        name ? <h3>{name}</h3> : <></>
      }
    </Container>
  )
}

export default VideoComponent