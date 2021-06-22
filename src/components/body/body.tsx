import React from 'react';
import './body.scss';

interface Body_Props {
    children: React.ReactChild
}
const Body = (props: Body_Props): React.ReactElement => {
    const { children } = props;
    return (
        <div className='body-container'>
            <div className='title-container'>
                {children}
            </div>
        </div>
    );
};

export default Body;