import '../styles/App.css';
import data from '../CV.json';
import About from './About/About.jsx';
import Education from './Education/Education.jsx';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Option from './Option/Option.jsx';
import Experience from './Experience/Experience.jsx';
import More from './More/More.jsx';


console.log(data);


function App() {
  const [option, setOption] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <About data={data} />
            <Option />
          </>
        } />
        <Route path='/education' element={<Education data={data} />} />
        <Route path='/experience' element={<Experience data={data}/>}/>
        <Route path='/more' element={<More data={data}/>}/>
        <Route path='*' element={`No existe dicha ruta`}/>
      </Routes>
    </div>
  );
}

export default App;
