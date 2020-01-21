import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../images/butterfly.png'



const Bound = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .left-header{
        background: #000;
    }
    .right-header{
        background: #fdcd07;
    }
    .logo-header{
        position: absolute;
        width: 200px;
        height: fit-content;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .logo-header img{
        width: 100%;
    }
`

class Header extends Component {

    render() {
        return (
            <Bound>
                <div className="left-header"></div>
                <div className="right-header"></div>
                <div className="logo-header">
                    <img src={logo} alt='logo' />
                </div>
            </Bound>
        )
    }
}


export default Header