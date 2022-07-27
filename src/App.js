
import './App.css';
import BackgroundComponent from './components/BackgroundComponent';
import CounterComponent from './components/CounterComponent';
import ModalComponent from './components/ModalComponent';

function App() {
  return (
    <div className="App">
      <h1 className='mt-2'>useState Exercises</h1>
      <div className='container mt-5 '>
        <div className='row gx-2 py-4'>
          <div className='col-md-6 p-4' >
            <div className='p-3 border border-dark bg-light rounded'> <CounterComponent/></div>
          </div>
          <div className='col-md-6 p-4'>
            <div className='p-4 border border-dark bg-light rounded'><BackgroundComponent/></div>
          </div>
          <div className='col-md-6 p-4' >
            <div className='p-3 border border-dark bg-light rounded'> <ModalComponent/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
