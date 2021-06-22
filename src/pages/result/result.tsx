import Wrapper from './../../components/wrapper';
import Header from './../../components/header';
import Body from './../../components/body';

import './result.scss';
import React from 'react';

const Result = () => {
    return (
        <Wrapper>
            <React.Fragment>
                <Header>
                    <div className='title-container'>
                        <p>You scored 4/10</p>
                    </div>
                </Header>
                <Body>
                    <div className='count-container'>
                        <p>Play Again?</p>
                    </div>
                </Body>
            </React.Fragment>
        </Wrapper >
    )
}

export default Result;