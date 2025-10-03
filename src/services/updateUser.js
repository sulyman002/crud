import axios from "axios";

export const updateUser = async (user) => {
    const response = await axios.put(`/users/${user.id}`, user );

    if(!response) {
        throw new Error("Failed to update user");
    }

    return response.data;
};