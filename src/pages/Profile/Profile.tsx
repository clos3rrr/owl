import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/userService";
import { User } from "../../types";
import styles from "./profile.module.scss";

const Profile: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    let isMounted = true;
      const fetchUsers = async () => {
        if (!id || isNaN(Number(id))) return
          const user = await getUser(Number(id));
          if (!user) {
            console.log('failed to fetch user');
            return
          }
          if (isMounted) {
            setUser(user as User);
          }
      }
      fetchUsers();

      return () => {
        isMounted = false;
      }
    }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>name: {user?.name}</div>
        <div>username: {user?.username}</div>
        <div>email: {user?.email}</div>
      </div>
    </div>
  );
};

export default Profile;
