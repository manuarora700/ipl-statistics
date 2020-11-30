import React from 'react';

import styles from '../styles/Home.module.css'


const Header = ({content, description}) => {

    return (
        
    <>
        <h1 className={styles.title}>
            {content}
        </h1>

            <p className={styles.description}>
                {description}{' '}
            {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
        </>
    )

}

export default Header;