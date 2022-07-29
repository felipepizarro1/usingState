
import './App.css';
import BackgroundComponent from './components/BackgroundComponent';
import CounterComponent from './components/CounterComponent';
import Footer from './components/Footer';
import Starwarscomponent from './components/Starwarscomponent';

function App() {
  return (
    <div className="App">
      <h1 className='mt-5 text-white'>useState and useEffect</h1>
      <h2 className='mt-1 fs-4 text-white'>Exercises</h2>
      <div className='container mt-5 '>
        <div className='row gx-2 py-4'>
          <div className='col-md-6 p-4' >
            <div className='p-3 shadow-lg text-white rounded'> <CounterComponent/></div>
          </div>
          <div className='col-md-6 p-4'>
            <div className='p-4 shadow-lg text-white rounded'><BackgroundComponent/></div>
          </div>
          <div className='col-md-6 p-4' >
            <div className='p-3 shadow-lg text-white rounded'> <Starwarscomponent/></div>
          </div>
        </div>
        <div className='mt-5 text-white'><Footer/> </div>
      </div>
    </div>
  );
}

export default App;
