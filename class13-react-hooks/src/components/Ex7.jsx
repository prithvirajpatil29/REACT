import React, { useCallback, useState } from 'react'
import Age from './ex7-sub/Age';
import Ageinfo from './ex7-sub/Ageinfo';

const Ex7 = () => {
  const [age, setAge] = useState(10);
  const incrementAge = () => {
    setAge(age + 1)
  }

  const userAge = `David age is ${age} years`
  const updateAge = useCallback(() => {
    return userAge
  },[age])
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3 className="display-3">useCallback Hook</h3>
          <p>useCallback will return a memoized version of the callback that only changes if one of the inputs has changed</p>
        </div>
      </div>
      <hr />
      <Age age={age} ageHandler={incrementAge}></Age>
      <Ageinfo ageInfo = {updateAge}></Ageinfo>
    </div>
  )
}

export default Ex7