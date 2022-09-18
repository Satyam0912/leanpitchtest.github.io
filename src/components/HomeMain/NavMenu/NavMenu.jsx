import React from 'react';
import './navmenu.css';
import { Nav } from 'react-bootstrap';

const NavMenu = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column navmenu fs-2">
            <Nav.Link href="#trainings">Trainings</Nav.Link>
            <Nav.Link href="#meetups">Meetups</Nav.Link>
            <Nav.Link href="#webinars">Webinars</Nav.Link>
            <Nav.Link href="#conference">Conference</Nav.Link>
            <Nav.Link href="#videos">Videos</Nav.Link>
            <Nav.Link href="#speakseries">PM speak Series</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#podcasts">Podcasts</Nav.Link>
            <Nav.Link href="#speaker">Be A Speaker</Nav.Link>
            <Nav.Link href="#volunteer">Be A Volunteer</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
        </Nav>
    )
}

export default NavMenu