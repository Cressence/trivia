import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Wrapper from './../../components/wrapper';
import Header from './../../components/header';
import Body from './../../components/body';

import './home.scss';

const Home = () => {
    const history = useHistory();

    return (
        <Wrapper>
            <React.Fragment>
                <Header>
                    <p>Entertainment: Video Games</p>
                </Header>
                <Body>
                    <div>
                        <p>It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.</p>
                        <div className='button-container'>
                            <Button variant='contained' className='button-default'>TRUE</Button>
                            <Button variant='contained' className='button-default active' onClick={() => history.push('/result')}>FALSE</Button>
                        </div>
                        <div className='count-container'>
                            <p>1 of 10</p>
                        </div>
                    </div>
                </Body>
            </React.Fragment>
        </Wrapper>
    )
}

export default Home;