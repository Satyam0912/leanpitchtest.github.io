import React from 'react'
import { Container } from 'react-bootstrap'
const Meetups = () => {
    return (
        <Container className='meetupSection center flex-column mt-5' fluid>
            <h1 className='meetupTitle mb-4'>Our Meetups</h1>
            <div className='border border-dark'>
                <a href='#upcomingMeetups' className='btn btn-dark'>Upcoming</a>
                <a href='#pastMeetups' className='btn'>Past</a>
            </div>
            <div className='meetups d-flex m-4'>
                <h2>Awosome meet up's will be here soon</h2>
            </div>
        </Container>
    )
}

export default Meetups