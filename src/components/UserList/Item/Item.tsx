import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../userList.module.scss'

interface iItemProps {
    id: number;
    name: string;
    email: string;
    removeItem: VoidFunction;
}

export const Item = ({id, name,  email, removeItem}: iItemProps) => {
    const navigate = useNavigate();
    
    return (
        <div className={styles.userList__item}>
            <div className={styles.name} onClick={()=>navigate(`/user/${id}`)}>
                {name}
            </div>
            <div className={styles.email}>
                {email}
            </div>
            <button onClick={removeItem}>
                Remove
            </button>
        </div>
    )
}
