import React from 'react';
import Mycomponent1 from './Mycomponent1';

function MyComponent() {
  return (
    <div className="row">
      <h1>Welcome to myComponent function (child component)</h1>
      <Mycomponent1></Mycomponent1>
    </div>
  );
}

export default MyComponent;
