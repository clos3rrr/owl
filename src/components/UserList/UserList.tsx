import React, { useEffect, useState } from 'react'
import { getUsers } from '../../services/userService';
import { User } from '../../types';
import { Item } from './Item/Item';
import styles from './userList.module.scss'

export const UserList = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        let isMounted = true;

        const fetchUsers = async () => {
            const users = await getUsers();
            if (!users) {
                console.log('failed to fetch users');
                return
            }
            if (isMounted) {
                setUsers(users as User[]);
            }
        }

        fetchUsers();
        return () => {
            isMounted = false;
        }
    }, []);

    useEffect(() => {
        if (!users.length) return
        const filterResult = users.filter((user: User) => user.name.toLowerCase().includes(searchText));
        setFilteredUsers(filterResult);
    }, [searchText, users.length]);
    
    const removeItem = (id: number) => {
        const newUsers = users.filter((user: User) => user.id !== id);
        setUsers(newUsers);
    }

    return (
        <div className={styles.userList}>
            <div className={styles.userList__search}>
                <input type='text' value={searchText} onChange={e => setSearchText(e.target.value)}/>
            </div>
            {searchText ?
                filteredUsers.map((user: User, index) => <Item key={user.id} {...user} removeItem={()=>removeItem(user.id)}/>) :
                users.map((user: User, index) => <Item key={user.id} {...user} removeItem={()=>removeItem(user.id)}/>)
            }
        </div>
    )
}
