import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';
import Timer from './components/Timer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Timer />
      </div>
    </Provider>
  );
}

export default App;
