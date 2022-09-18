import React from 'react'
import './conference.css'
import { Container } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const Conference = () => {
    return (
        <Container className='conference bg-dark text-white' fluid>
            <h1 className='conferenceTitle'>Our Conferences</h1>
            <div className='mb-4 border border-light m-auto' style={{ width: 'fit-content' }}>
                <a className='btn btn-light'>Upcoming</a>
                <a className='btn btn-dark text-white'>Past</a>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id distinctio eaque soluta ut quaerat consequuntur, molestias cupiditate eos, magnam quo temporibus et animi. Dolor quidem dicta amet placeat, facilis necessitatibus! Ducimus optio vel quas adipisci, a ullam voluptatibus quo voluptates repellat iure.</p>
            <br /><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur magni velit, aliquid hic sit, nihil, architecto tempora deleniti cumque modi distinctio nostrum iure dolorum. Dolores, esse nostrum omnis nam labore sint quidem sapiente sed, officia repellendus voluptatem laboriosam ab, molestiae ex totam!</p>
            <br /><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quidem repudiandae doloribus minus quibusdam, necessitatibus quaerat inventore deleniti aliquam consectetur?</p>
            <button className='conferenceNotifyBtn btn btn-danger ps-4 pe-4 mt-4'>Notify me <BsArrowRight /></button>
        </Container>
    )
}

export default Conference