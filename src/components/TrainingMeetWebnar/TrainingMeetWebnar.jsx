import { Container } from 'react-bootstrap';
import './traningMeetWebnar.css';
import Trainings from './Trainings/Trainings';
import Meetups from './Meetups/Meetups';
import Webnars from './Webnars/Webnars';

const TrainingMeetWebnar = () => {

    return (
        <Container className='TrainingMeetWebnar' fluid>
            <Trainings />
            <Meetups />
            <Webnars />
        </Container>
    )
}

export default TrainingMeetWebnar