import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'; // Use proper camel case for component names.
import Ex1 from './Component/Ex1';
import Ex2 from './Component/Ex2';
import Ex3 from './Component/Ex3';
import Ex4 from './Component/Ex4';
import Ex5 from './Component/Ex5';
import Ex6 from './Component/Ex6';
import Ex7 from './Component/Ex7';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className='bg-warning text-center'>THIS IS APP COMPONENT..! (PARENT COMPONENT)</h1>
        </div>
      </div>
      {/* <MyComponent></MyComponent> Use proper camel case for component names */}
      {/* <Ex1></Ex1>
      <Ex2></Ex2>
      <Ex3></Ex3>
      <Ex4></Ex4> */}
      {/* <Ex5 img="https://images.pexels.com/photos/5579177/pexels-photo-5579177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name="Parent Card" lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quibusdam sequi recusandae voluptatem officia perspiciatis ratione quaerat iure dolorem corporis sed voluptatibus quisquam, similique molestiae obcaecati unde labore harum omnis!"/> */}
      {/* <Ex6 img="https://images.pexels.com/photos/5579177/pexels-photo-5579177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name="Parent Card" lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quibusdam sequi recusandae voluptatem officia perspiciatis ratione quaerat iure dolorem corporis sed voluptatibus quisquam, similique molestiae obcaecati unde labore harum omnis!"/> */}
      <Ex7/>
      
    </div>
  );
}

export default App;
