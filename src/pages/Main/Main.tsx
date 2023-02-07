import React from "react";
import { UserList } from "../../components/UserList/UserList";
import styles from "./main.module.scss";

const Main: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <UserList/>
        </div>
    );
};

export default Main;