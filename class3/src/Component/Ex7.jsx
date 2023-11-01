import React from 'react'

const Ex7 = (props) => {
    console.log(props);
    const {img, lorem, name} = props;
  return (
    <div className="row">
        <div className="col col-sm-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12">
            <h1 className='bg-secondary text-white text-center p-2'>REACT DEFAULT FUNCTIONAL PROPS</h1>
        </div>
        <div className="col-sm-12 col-lg-12 col-md-12 col-xl-4 col-xxl-12">
            <div className="lead border p3">
                <h1 style={{backgroundColor:props.color}}>{name}</h1>
            </div>
        </div>
    </div>
  )
}
Ex7.defaultProps = {
    color : '#F1DA51',
    name : "Child Card"
}
export default Ex7