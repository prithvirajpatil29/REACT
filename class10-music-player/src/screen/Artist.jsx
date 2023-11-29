import React from 'react'
import { NavLink } from 'react-router-dom';
import Image from './Image';

const Artist = (props) => {
    const {id, name, images, genres, followers} = props
  return (
    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-3">
        <div className="card">
            <Image data={images[0]} />
            <div className="card-body">
                <h5 className="text-center text-info">
                    {name}
                </h5>
            </div>
            <div className="card-footer">
                <NavLink to={`/track/${id}`} className='btn btn-info text-white'>Tracks</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Artist