import React from 'react'

const Objectstyle = () => {
    const container = {display:'flex',justifyContent:'center'}
    const header = {backgroundColor : '#8354EA',color:'#fff',padding:'10px',margin:'10px',borderRadius:'10px',textAlign:'center'}
  return (
    <div style={{container}}>
        <h1 style={header}>Object style</h1>
    </div>
  )
}

export default Objectstyle