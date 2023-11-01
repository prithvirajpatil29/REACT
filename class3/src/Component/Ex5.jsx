import React from 'react'

const Ex5 = (props) => {
  return (
    <div className="row">
        <div className="col col-sm-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12">
            <h1 className='bg-secondary text-white text-center p-2'>REACT FUNCTIONAL PROPS</h1>
        </div>
        <div className="col-sm-12 col-lg-12 col-md-12 col-xl-4 col-xxl-12">
            <div className="card" >
                <img src={props.img} className='' alt="" />
                <div className="card-body">
                    <h5>Card Title</h5>
                    <p>{props.lorem}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Ex5