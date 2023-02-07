import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './header.module.scss';

export const Header = () => {

    const navigate = useNavigate();

  return (
    <div className={styles.header}>
        <button className={styles.header__back} onClick={()=>navigate(-1)}>
            Back
        </button>
    </div>
  )
}
