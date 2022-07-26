
import './App.css';
import BackgroundComponent from './components/BackgroundComponent';
import CounterComponent from './components/CounterComponent';

function App() {
  return (
    <div className="App">
      <h1 className='mt-2'>useState Exercises</h1>
      <div className='container mt-5'>
        <div className='row py-5'>
          <div className='col-6 border bg-light p-2' >
            <CounterComponent/>
          </div>
          <div className='col-6 border bg-light p-2'>
            <BackgroundComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
