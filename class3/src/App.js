import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'; // Use proper camel case for component names.

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className='bg-warning text-center'>THIS IS APP COMPONENT..! (PARENT COMPONENT)</h1>
        </div>
      </div>
      <MyComponent></MyComponent> {/* Use proper camel case for component names */}
    </div>
  );
}

export default App;
