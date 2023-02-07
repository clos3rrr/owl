import axios from "axios";
import { User } from "../types";

export const getUsers = async (): Promise<User[] | void> => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (id: number): Promise<User | void> => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}
