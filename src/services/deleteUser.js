import axios from "axios";

export const deleteUser = async (user) => {
    const response = await axios.delete(`/users/${user.id}`, {data: user} );

    if(!response) {
        throw new Error("Failed to delete user");
    }

    return response.data;
};  