 import axios from "axios";
 
 
 export const fetchUsers = async () => {
    try {
      const response = await axios.get("/users.json");
      const userData = response.data;
      return userData;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };