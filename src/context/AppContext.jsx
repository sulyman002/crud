import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [changeAdmin, setChangeAdmin] = useState("dashboard");
  const [searchUser, setSearchUser] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [clickRow, setClickRow] = useState(false);
  const [addNewUser, setAddNewUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      phoneNumber: "",
      department: "",
      permission: "",
    });

  const store = {
    changeAdmin,
    setChangeAdmin,
    searchUser,
    setSearchUser,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    clickRow,
    setClickRow,
    addNewUser,
    setAddNewUser,
    setEditUser,
    editUser,
    editingRow,
    setEditingRow,
    formData,
    setFormData,
    error,
    setError
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
