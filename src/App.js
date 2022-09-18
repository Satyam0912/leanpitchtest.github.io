import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeMain from './components/HomeMain/HomeMain';
import HomeMidSection from './components/HomeMidSection/HomeMidSection';
import LabComponent from './components/LabComponent/LabComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeMain />
      <HomeMidSection />
      <LabComponent  />
    </div>
  );
}

export default App;