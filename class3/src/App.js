import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'; // Use proper camel case for component names.
import Ex1 from './Component/Ex1';
import Ex2 from './Component/Ex2';
import Ex3 from './Component/Ex3';
import Ex4 from './Component/Ex4';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className='bg-warning text-center'>THIS IS APP COMPONENT..! (PARENT COMPONENT)</h1>
        </div>
      </div>
      {/* <MyComponent></MyComponent> Use proper camel case for component names */}
      <Ex1></Ex1>
      <Ex2></Ex2>
      <Ex3></Ex3>
      <Ex4></Ex4>
    </div>
  );
}

export default App;
