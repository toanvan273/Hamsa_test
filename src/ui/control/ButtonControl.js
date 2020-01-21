import React, { Component } from 'react';
import styled from 'styled-components';


const Bound = styled.button`
    width: 200px;
    height: 40px;
    font-weight: 900;
    border: ${props=>props.data?props.data.boder:'unset'};
    border-radius: 5px;
    color: ${props=>props.data?props.data.color:'unset'};
    background: ${props=>props.data?props.data.background:'unset'};
    margin-left: ${props=>props.left?props.left:'unset'};
`

class ButtonControl extends Component {

    render() {
        const {content,style,mLeft} = this.props
        return (
            <Bound data={style} left={mLeft}>
               {content}
            </Bound>
        )
    }
}


export default ButtonControl