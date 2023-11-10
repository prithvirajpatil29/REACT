import React from 'react'

const User = (props) => {
    console.log(props.cartitem)
    // console.log(props.cartitem.map((item) => item.id))
  return (
    <div>
        {
            props.cartitem.map((item) => {
                return(
                <div>
                    <h2>{item.id}</h2>
                    <div>{item.products.map((prod) => {
                        return(
                            <div>
                                <img src={prod.thumbnail} alt="" />
                            </div>
                        )
                    })}</div>
                </div>
                )
                
            })
        }
    </div>
  )
}

export default User
