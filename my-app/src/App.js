import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Counter from './components/Counter'
import CounterButtons from './components/CounterButtons'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Counter />
      <CounterButtons /> 
      </div>
    </Provider>
  );
}

export default App;
