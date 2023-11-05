import logo from './logo.svg';
import './App.css';
import users from './data/users.js'
import Usercomponents from './components/Usercomponents.jsx';
// import Usercomponents from './components/Usercomponents';
function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h1 className='bg-warning text-center text-white p-2'>FUNCTIONAL COMPONENT PROPS</h1>
          <div className='bg-danger text-white p-3 border'>
            {/* <users userData = {users}></users> */}
            {/* {users.map((user) => (
              <div key={user.id}>
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
                <p>City: {user.address.city}</p>
                <p>Pin: {user.address.pin}</p>
                <h3>Bank Accounts:</h3>
                <ul>
                  {user.bank.map(account => (
                    <li key={account.accNo}>
                      Account Number: {account.accNo}, Bank Name: {account.bName}, Type: {account.type}
                    </li>
                  ))}
                </ul>
              </div>
            ))} */}
            <Usercomponents></Usercomponents>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
