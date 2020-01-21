import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonControl from '../control/ButtonControl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faPinterest, faTwitter, faTumblr, faMailchimp } from '@fortawesome/free-brands-svg-icons'
const Bound = styled.div`
   background: #000;
   .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-size: 42px;
            letter-spacing: 16px;
            color: #fdcd07;
            font-weight: bold;
        }
        p{
            font-size: 16px;
            font-weight: 700;
            color: #fdcd07;
            letter-spacing: 2px;
        }
   }
  .button-connect{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
  .social{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
    .content{
        width: 200px;
        display: flex;
        justify-content: space-between;
    }
  }
  .slogen{
    display: flex;
    height: 150px;
    background: #fdcd07;
    align-items: center;
    justify-content: center;
    h3{
        font-size: 45px;
        letter-spacing: 2px;
        color: #000;
    }
  }
`

class Contact extends Component {

    render() {
        return (
            <Bound>
                <div className="title">
                    <h1>BUTTERFLIES</h1>
                    <p>A STREETWEAR COMPANY CHANGING IT UP</p>
                </div>
                <div className="button-connect">
                    <ButtonControl
                        style={{
                            boder: '2px solid #fff',
                            color: '#ffffff',
                            background: '#000'
                        }}
                        content={'ENTER EMAIL ADDRESS'} />
                    <ButtonControl
                        mLeft={'20px'}
                        style={{
                            boder: 'unset',
                            color: '#000',
                            background: '#fdcd07'
                        }}
                        content={' MAKE IT HAPPEN'} />

                </div>
                <div className='social'>
                    <div className='content'>
                        <FontAwesomeIcon icon={faFacebook} size="2x" color='#fdcd07' onClick={this.onClick} />
                        <FontAwesomeIcon icon={faInstagram} size="2x" color='#fdcd07' />
                        <FontAwesomeIcon icon={faPinterest} size="2x" color='#fdcd07' />
                        <FontAwesomeIcon icon={faTwitter} size="2x" color='#fdcd07' />
                        <FontAwesomeIcon icon={faTumblr} size="2x" color='#fdcd07' />
                        <FontAwesomeIcon icon={faMailchimp} size="2x" color='#fdcd07' />
                    </div>
                </div>
                <div className='slogen'>
                    <h3>CHANGE IT UP!</h3>
                </div>
            </Bound>
        )
    }
}


export default Contact