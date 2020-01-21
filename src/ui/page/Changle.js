import React, { Component } from 'react';
import styled from 'styled-components';
import block1 from '../../images/ba2.jpg'
import block2 from '../../images/ba3.jpg'
import block3 from '../../images/ba4.jpg'
import block5 from '../../images/ba5.jpg'
import block6 from '../../images/ba6.jpg'
import block7 from '../../images/ba7.jpg'
import block8 from '../../images/ba8.jpg'
import block9 from '../../images/ba9.jpg'


const Bound = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    img{
        width:100%;
    }
  .lock{
    display: grid;
    grid-gap: 10px;
  }
`

class Changle extends Component {

    render() {
        return (
            <Bound>
                <div className='lock'>
                    <img src={block1} alt='block' />
                    <img src={block2} alt='block' />
                    <img src={block3} alt='block' />
                </div>
                <div className='lock'>
                    <img src={block5} alt='block' />
                    <img src={block6} alt='block' />
                    <img src={block7} alt='block' />
                </div>
                <div className='lock'>
                    <img src={block8} alt='block' />
                    <img src={block9} alt='block' />
                </div>
            </Bound>
        )
    }
}


export default Changle