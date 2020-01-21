import React, { Component } from 'react';
import styled from 'styled-components';
import block from '../../images/ba1.jpg'



const Bound = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    img{
        width:100%;
    }
    .left{
        background: #fdcd07;
        padding: 30px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .first-content{

        }
        p{
            font-size: 34px;
            font-weight: 600;
            color: #000;
        }
        h2{
            font-size: 64px;
            font-weight: 800;
            letter-spacing: 2px;
            color: #000;
            margin: 0;
        }
    }
`

class Close extends Component {

    render() {
        return (
            <Bound>
                <div className='left'>
                    <div className='first-content'>
                        <p>DON'T JUST CHANGE YOUR</p>
                        <h2>CLOTHES</h2>
                    </div>
                    <div className='secon-content'>
                        <p>CHANGE YOUR</p>
                        <h2>ATTITUDE</h2>
                    </div>
                </div>
                <div className='right'>
                    <img src={block} alt='block' />
                </div>
            </Bound>
        )
    }
}


export default Close