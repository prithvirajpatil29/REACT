import React from 'react'
import {styledcomp} from '../object-style/style'
import styled from 'styled-components'

const Styledbutton = styled.button `
    background-color: #FEA500;
    color: #fff;
    padding: 15px 30px;
    width: 250px;
    border: 0px;
    text-align: center;
    margin: 10px auto;
    border-radius: 10px;
`;
const Styledcomponent = () => {
  return (
    <div style={styledcomp.styledcontainer}>
        <h2 style={styledcomp.styledheade}>Styledcomponent</h2>
        <button>Share</button>
        <Styledbutton>Styled component</Styledbutton>
    </div>
  )
}

export default Styledcomponent