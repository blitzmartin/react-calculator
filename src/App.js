import './App.css';
import * as Op from './components/Operations'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ul>
        <li>Addition result: {Op.add(1, 2)}</li>
        <li>Multiplication result: {Op.multiply(2, 3)}</li>
        <li>Subtraction result: {Op.subtract(7, 2)}</li>
        <li>Division result: {Op.divide(5, 2)}</li>
      </ul>

    </div>
  );
}

export default App;
