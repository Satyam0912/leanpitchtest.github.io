import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeMain from './components/HomeMain/HomeMain';
import HomeMidSection from './components/HomeMidSection/HomeMidSection';
import LabComponent from './components/LabComponent/LabComponent';
import TrainingMeetWebnar from './components/TrainingMeetWebnar/TrainingMeetWebnar';
import Conference from './components/Conference/Conference';
import VideoBlogPodcast from './components/VideoBlogsPodcasts/VideoBlogPodcast';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeMain />
      <HomeMidSection />
      <LabComponent />
      <TrainingMeetWebnar />
      <Conference />
      <VideoBlogPodcast />
    </div>
  );
}

export default App;