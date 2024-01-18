import React, {useLayoutEffect, useState} from 'react'

const url = 'https://jsonplaceholder.typicode.com/users'

const Ex5 = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    await fetch(`${url}`).then(res => res.json())
    .then((out) => {
      console.log('out', out)
      setUsers(out)
    }).catch(err => console.log(err.message))
  }
  useLayoutEffect(() => {
    console.log('this is useLayoutEffect hooks')
    getUser()
  },[])
  return (
    // <div>{console.log('This is Render Method')}</div>
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3">
            useLayoutEffect Hook
          </h5>
          <p className="text-secondary">
              The uselayputEfext hook is a variation of the useEffect hook that runs asynchronous before the browser repaints the screen
            </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col text-center">
          <div className="table table-boarded table-dark table-striped table-hover table-responsive">
            <thead>
              <tr className="table-secondary">
                <th>useEffect</th>
                <th>useLayoutEffect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The function pass inside the useEffect hook fires after layout print</td>
                <td>The function pass inside the useLayoutEffect hook fires before the browser updates the screen</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>This is ok for most of side effects that shouldn't block the browser from updating the screen</td>
                <td>There are cases where you may nott want the behaivor of useEffect hook. It fits where, to prevent the user from seeing flickers of changes we can use useLayoutEffect</td>
              </tr>

            </tfoot>
          </div>
        </div>
      </div>
      <div className="row">
        {
          users && users.map((item, index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4" key={index}>
                <div className="card my-2">
                  <div className="card-header ">
                    <h5 className="text-center text-success ">
                      {item.id} {item.name}
                    </h5>
                    </div>
                    <div className="card-body">
                      <p><b>Name </b><span className="float-end">{item.name}</span></p>
                      <p><b>Email </b><span className="float-end">{item.email}</span></p>
                      <p><b>Phone </b><span className="float-end">{item.phone}</span></p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Ex5