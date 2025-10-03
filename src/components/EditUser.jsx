import useAppContext from "../context/useAppContext";
import close from "../assets/close.svg";
import MobileNav from "./MobileNav";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/updateUser.js";
import { useEffect, useState } from "react";

const EditUser = () => {
  const {  setEditUser, setEditingRow, editingRow, error, setError, editUser } =
    useAppContext();
  const [dataSave, setDataSave] = useState("");

  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      client.invalidateQueries(["users"]);
    },
  });

  const handleError = () => {
    if (
      editingRow.name.trim() === "" ||
      editingRow.lastname.trim() === "" ||
      editingRow.phonenumber.trim() === "" ||
      editingRow.email.trim() === "" ||
      editingRow.department.trim() === "" ||
      editingRow.permission.trim() === ""
    ) {
      setError(
        "Please fill in all required fields. Double-check and try again."
      );
      return true;
    }
    {
      return false;
    }
  };

  const handleSave = () => {
    mutation.mutate(editingRow);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleError()) { handleSave();
    setError(null);
    setDataSave("User edited successfully")
setEditUser(false)};
  };

  const formNotAllFIlled =
    !editingRow.name ||
    !editingRow.lastname ||
    !editingRow.email ||
    !editingRow.username ||
    !editingRow.phonenumber;

    useEffect(() => {
    if (editUser) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [editUser]);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#575D7299] z-50">
      <MobileNav />

      <div className="px-8 flex md:hidden items-center gap-[2px] py-[14px] bg-[#FAF7FC] ">
        <p className="leading-[20px] text-[#89939E] ">User Management/</p>
        <p className="leading-[20px] text-[#8F50A9] ">Add New User</p>
      </div>
      {editUser && (
        <div className="flex justify-end overflow-y-auto ">
          <div className="w-full lg:w-1/4 md:2/3 h-screen bg-white flex flex-col gap-[30px] md:pt-20 pt-10">
            <div className="px-8 flex flex-col gap-[45px] ">
              <div className="flex items-center justify-between">
                <p className="uppercase font-500 font-medium text-[20px] text-gray-600 leading-[150%] ">
                  EditUser
                </p>
                <p className="">{dataSave}</p>
                <div
                  onClick={() => setEditUser(false)}
                  className="cursor-pointer"
                >
                  <img src={close} alt="close-btn" />
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[20px]"
              >
                <div
                  className={`flex flex-col py-[8px] rounded-[8px] border border-[#6C748B] px-[20px] ${
                    error ? "border-red-600" : null
                  }`}
                >
                  <p className="text-[12px] text-gray-600 ">First Name</p>
                  <input
                    name="name"
                    type="text"
                    placeholder="First Name*"
                    required
                    value={editingRow.name || ""}
                    onChange={(e) =>
                      setEditingRow({ ...editingRow, name: e.target.value })
                    }
                    className="text-gray-400 text-[16px] outline-none "
                  />
                </div>
                <div className="flex flex-col py-[8px] rounded-[8px] border border-[#6C748B] px-[20px]">
                  <p className="text-[12px] text-gray-600 ">last Name</p>
                  <input
                    name="lastname"
                    type="text"
                    placeholder="Last Name*"
                    required
                    value={editingRow.lastname || ""}
                    onChange={(e) =>
                      setEditingRow({ ...editingRow, lastname: e.target.value })
                    }
                    className="text-gray-400 text-[16px] outline-none "
                  />
                </div>
                <div className="flex flex-col py-[8px] rounded-[8px] border border-[#6C748B] px-[20px]">
                  <p className="text-[12px] text-gray-600 ">Email Address</p>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address*"
                    required
                    value={editingRow.email || ""}
                    onChange={(e) =>
                      setEditingRow({ ...editingRow, email: e.target.value })
                    }
                    className="text-gray-400 text-[16px] outline-none "
                  />
                </div>
                <div className="flex flex-col py-[8px] rounded-[8px] border border-[#6C748B] px-[20px]">
                  <p className="text-[12px] text-gray-600 ">Username</p>
                  <input
                    name="username"
                    type="text"
                    placeholder="username*"
                    required
                    value={editingRow.username || ""}
                    onChange={(e) =>
                      setEditingRow({ ...editingRow, username: e.target.value })
                    }
                    className="text-gray-400 text-[16px] outline-none "
                  />
                </div>
                <div className="flex flex-col py-[8px] rounded-[8px] border border-[#6C748B] px-[20px]">
                  <p className="text-[12px] text-gray-600 ">Phone Number</p>
                  <input
                    name="phonenumber"
                    type="text"
                    placeholder="Phone Number*"
                    required
                    value={editingRow.phonenumber || ""}
                    onChange={(e) =>
                      setEditingRow({
                        ...editingRow,
                        phonenumber: e.target.value,
                      })
                    }
                    className="text-gray-400 text-[16px] outline-none "
                  />
                </div>
                <div className="flex flex-col py-[8px] rounded-[8px] border border-[#6C748B] px-[20px]">
                  <p className="text-[12px] text-gray-600 ">Department</p>
                  <select
                    name="department"
                    
                    value={editingRow.department}
                    onChange={(e) =>
                      setEditingRow({
                        ...editingRow,
                        department: e.target.value,
                      })
                    }
                    className="text-gray-400 text-[16px] outline-none "
                  >
                    <option value="">Select Department</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
                <div className="flex flex-col py-[8px] rounded-[8px] border border-[#6C748B] px-[20px]">
                  <p className="text-[12px] text-gray-600 ">Permission</p>
                  <select
                    name="permission"
                    
                    value={editingRow.permission}
                    onChange={(e) =>
                      setEditingRow({
                        ...editingRow,
                        permission: e.target.value,
                      })
                    }
                    className="text-gray-400 text-[16px] outline-none "
                  >
                    <option value="">Select Permission</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                  </select>
                </div>

                <button
                  disabled={formNotAllFIlled}
                  type="submit"
                  className={`text-[16px] font-medium rounded-[8px] py-[16px] 
                    ${
                      formNotAllFIlled
                        ? "bg-gray-300 cursor-not-allowed text-white"
                        : "bg-[#1F66B7] cursor-pointer text-white"
                    }`}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUser;
