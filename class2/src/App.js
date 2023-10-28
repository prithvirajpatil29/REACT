import React from "react";
function App() {
  const heading1 = React.createElement("h1",{id:'title1',key:'h1'},"heading-1")
  const heading2 = React.createElement("h3",{id:'title2'},"heading-2")
  const div = React.createElement("div",{className:'aboutus'},"About Us")
  const div1 = React.createElement("div",{className:'aboutus'},[heading1,heading2])

  return (
    <div className="App container">
        <h1 className="bg-primary text-white">Welcome to React</h1>
        {heading1}
        {heading2}
        {div}
        <div className="container bg-danger text-white py-2 px-3">
          {div1}
        </div>
    </div>
  );
}

export default App;
