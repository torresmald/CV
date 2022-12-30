import '../styles/App.scss';
import data from '../CV.json';
import About from './About/About.jsx';
import Education from './Education/Education.jsx';
import { Routes, Route } from 'react-router-dom';
import Option from './Option/Option.jsx';
import Experience from './Experience/Experience.jsx';
import More from './More/More.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div className='home'>
            <About data={data} />
            <Option />
          </div>
        } />
        <Route path='/education' element={<Education data={data} />} />
        <Route path='/experience' element={<Experience data={data} />} />
        <Route path='/more' element={<More data={data} />} />
        <Route path='*' element={`No existe dicha ruta`} />
      </Routes>
    </div>
  );
}

export default App;
