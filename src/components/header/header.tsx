import React from 'react';
import './header.scss';

interface Header_Props {
    children: React.ReactChild
}

const Header = (props: Header_Props): React.ReactElement => {
    const { children } = props;
    return (
        <div className='header-container'>
            {children}
        </div>
    )
};

export default Header;