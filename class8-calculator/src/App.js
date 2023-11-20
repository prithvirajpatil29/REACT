import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const handleClick = (e) => {
    // alert(e.target.value);s
    setResult(result.concat(e.target.value));
  }
  const clear = ()=> {
    setResult("");
  }
  const calculation = () => {
    try{
      setResult(eval(result).toString());
    }
    catch{
      setResult("Error");
    }
  }
  const handleDelete = () => {
    setResult(result.slice(0,-1));
  }
  return (
    <Fragment>
      <section>
      <div>
        <h1>CALCULATOR PROJECT</h1>
        <input type="text" value={result}/>
        <table>
          <tr>
            <td colSpan={2} onClick={clear}><button>AC</button></td>
            <td><button onClick={handleDelete}>DEL</button></td>
            <td><button value={'/'} onClick={handleClick}>&divide;</button></td>
          </tr>
          <tr>
            <td><button value={'7'} onClick={handleClick}>7</button></td>
            <td><button value={'8'} onClick={handleClick}>8</button></td>
            <td><button value={'9'} onClick={handleClick}>9</button></td>
            <td><button value={'*'} onClick={handleClick}>&times;</button></td>
          </tr>
          <tr>
            <td><button value={'4'} onClick={handleClick}>4</button></td>
            <td><button value={'5'} onClick={handleClick}>5</button></td>
            <td><button value={'6'} onClick={handleClick}>6</button></td>
            <td><button value={'-'} onClick={handleClick}>-</button></td>
          </tr>
          <tr>
            <td><button value={'1'} onClick={handleClick}>1</button></td>
            <td><button value={'2'} onClick={handleClick}>2</button></td>
            <td><button value={'3'} onClick={handleClick}>3</button></td>
            <td><button value={'+'} onClick={handleClick}>+</button></td>
          </tr>
          <tr>
            <td><button value={'0'} onClick={handleClick}>0</button></td>
            <td><button value={'.'} onClick={handleClick}>.</button></td>
            <td colSpan={2} onClick={calculation}><button>=</button></td>

          </tr>
        </table>
      </div>
      </section>
    </Fragment>
  );
}

export default App;
