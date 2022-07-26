
import './App.css';
import BackgroundComponent from './components/BackgroundComponent';
import CounterComponent from './components/CounterComponent';

function App() {
  return (
    <div className="App">
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-6'>
            <CounterComponent/>
          </div>
          <div className='col-6'>
            <BackgroundComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
