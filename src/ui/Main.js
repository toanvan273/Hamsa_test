import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './page/Header'
import Contact from './page/Contact'
import Changle from './page/Changle'
import Close from './page/Close'
const Bound = styled.div`
    position:relative;
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
`

class Main extends Component {

    render() {
        return (
            <Bound>
               <Header />
               <Contact />
               <Changle />
               <Close />
            </Bound>
        )
    }
}


export default Main