import React, { Component } from 'react';
import styled from 'styled-components';



const Bound = styled.div`
    display:flex;
    flex-direction:row;
    background-color:#fafafa;
    flex:1;
    overflow:auto;
    .main-bound{
      display:flex;
      height:100%;
      overflow:auto;
      flex: 1;
    }
   
`

class MainScreen extends Component {
  render() {
    return (
      <Bound>
        ABC
      </Bound>
    );
  }
}

export default MainScreen