import React from 'react'

const Ex6 = (props) => {
    console.log(props);
    const {img, lorem, name} = props;
  return (
    <div className="row">
        <div className="col col-sm-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12">
            <h1 className='bg-secondary text-white text-center p-2'>REACT DESTRUCTING FUNCTIONAL PROPS</h1>
        </div>
        <div className="col-sm-12 col-lg-12 col-md-12 col-xl-4 col-xxl-12">
            <div className="card" >
                <img src={img} className='' alt="" />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>{lorem}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex6