import React, { useMemo, useState } from 'react'
import Age from './ex8-sub/Age';
import Ageinfo from './ex8-sub/Ageinfo';

const Ex8 = () => {
  const [age, setAge] = useState(30);
  const incrementAge = () => {
    setAge(age+1)
  }
  const updateAge = () => {
    return `My age is ${age} years`
  }
  useMemo(() => {
    return updateAge()
  },[age])
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3 className="display-3">useMemo Hook</h3>
          <p className='text-secondary'>useCallback return the memorized callback respnse</p>
          <p className="text-secondary">useMemo will only recomputer the memoized value when one of the deps has changed</p>
        </div>
      </div>
      <hr />
      <Age age={age} ageHandler = {incrementAge}></Age>
      <Ageinfo updateAge= {updateAge}></Ageinfo>
    </div>
  )
}

export default Ex8