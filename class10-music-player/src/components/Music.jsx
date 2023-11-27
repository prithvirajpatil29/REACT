import React, { useEffect, useState } from 'react';
import key from '../config/token'
import Artist from '../screen/Artist';
import Search from '../screen/Search';

// useEffect => a hook used to call api request

const URL = 'https://api.spotify.com';

const Music = () => {
  const [artist, setArtist] = useState([]);

  const searchArtist = async (artistName) => {
    await fetch(`${URL}/v1/search/?q=${artistName}&type=artist`, {
      method:'GET',
      headers:{
        Authorization: `Bearer ${key}`
      }
    }) 
    .then(res => res.json())
    .then(out => {
      console.log(out.artists.items);
      setArtist(out.artists.items)
    })
    .catch(err => console.log(err.message));
  }

  useEffect(()=>{
    // statements
    searchArtist('Ilayaraj')
  }, [])
  
  return (
   
    <div className="container">
    <div className="row">
        <div className="col">
            <h1 className="display-3 text-success text-center">Music</h1>
        </div>
    </div>

    <Search searchName={searchArtist}/>

    <div className="row">
      {
        artist.map((item, index)=>{
          return(
            <Artist key={index} {...item}/>
          )
        })
      }
    </div>
   </div>
  )
};

export default Music