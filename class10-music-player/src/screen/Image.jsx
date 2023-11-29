import React from 'react'
const noImage = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
const Image = (props) => {
  return (
    <img src={props.data ? props.data.url :noImage} alt="" style={{height:300}}/>
  )
}

export default Image