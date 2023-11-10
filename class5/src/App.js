import React, { Component, useState } from 'react'
import cart from './data/user.json';
import User from './components/User';
// import React from 'react'

const App = () => {
  // console.log(cart[1])
  return (
    <div>
      <User cartitem= {cart}></User>
    </div>
  )
}

export default App;