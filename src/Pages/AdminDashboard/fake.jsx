import React, { Component, useState } from "react";
import lockIcon from "../../../assets/AdminDashboard/lock.svg";
import profileIcon from "../../../assets/AdminDashboard/Profile.svg";
import SearchIcon from "../../../assets/AdminDashboard/Search.svg";
import AddUserIcon from "../../../assets/AdminDashboard/Add-User.svg";
import DeleteIcon from "../../../assets/AdminDashboard/Delete.svg";
import RightArrow from "../../../assets/AdminDashboard/RightArrow.svg";
import leftArrow from "../../../assets/AdminDashboard/leftArrow.svg";
import AddUserModal from "../AddUserModal/AddUserModal";

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: "Tiempo1", name: "User 1", role: "User" },
        { id: "Tiempo2", name: "User 2", role: "User" },
        { id: "Tiempo3", name: "User 3", role: "User" },
        { id: "Tiempo4", name: "User 4", role: "User" },
        { id: "Tiempo5", name: "User 5", role: "User" },
        { id: "Tiempo6", name: "User 6", role: "User" },
        { id: "Tiempo7", name: "User 7", role: "User" },
        { id: "Tiempo8", name: "User 8", role: "User" },
        { id: "Tiempo9", name: "User 9", role: "User" },
        { id: "Tiempo10", name: "User 10", role: "User" },
        { id: "Tiempo11", name: "User 11", role: "User" },
        { id: "Tiempo12", name: "User 12", role: "User" },
        { id: "Tiempo13", name: "User 13", role: "User" },
        { id: "Tiempo14", name: "User 14", role: "User" },
        { id: "Tiempo15", name: "User 15", role: "User" },
        { id: "Tiempo16", name: "User 16", role: "User" },
        { id: "Tiempo17", name: "User 17", role: "User" },
        { id: "Tiempo18", name: "User 18", role: "User" },
        { id: "Tiempo19", name: "User 19", role: "User" },
        { id: "Tiempo20", name: "User 20", role: "User" },
        { id: "Tiempo21", name: "User 21", role: "User" },
        { id: "Tiempo22", name: "User 22", role: "User" },
        { id: "Tiempo23", name: "User 23", role: "User" },
        { id: "Tiempo24", name: "User 24", role: "User" },
      ],
      selectedUsers: [],
      currentPage: 1,
      usersPerPage: 10, // Number of users per page
    };
  }

  handleCheckboxChange = (userId) => {
    const { selectedUsers } = this.state;
    if (selectedUsers.includes(userId)) {
      this.setState({
        selectedUsers: selectedUsers.filter((id) => id !== userId),
      });
    } else {
      this.setState({
        selectedUsers: [...selectedUsers, userId],
      });
    }
  };

  handleDeleteSelected = () => {
    const { users, selectedUsers } = this.state;
    const remainingUsers = users.filter(
      (user) => !selectedUsers.includes(user.id)
    );
    this.setState({
      users: remainingUsers,
      selectedUsers: [],
    });
  };

  handleMakeAdmin = (userId) => {
    const { users } = this.state;
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, role: "Admin" };
      }
      return user;
    });
    this.setState({ users: updatedUsers });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { users, selectedUsers, currentPage, usersPerPage } = this.state;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const [open, setOpen] = useState(false);

    return (
      <div className="w-full max-w-screen-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>
        {selectedUsers?.length > 0 ? (
          <div className="flex justify-between items-center">
            <div>{selectedUsers?.length} user selected</div>
            <div>
              <button
                onClick={() => this.handleDeleteSelected(user.id)}
                className="flex items-center gap-2 border border-[#ED9393] text-[#ED9393] hover_gradient_custom hover:text-[#ffff] text-[14px] font-semibold py-1 px-2 rounded"
              >
                <img src={DeleteIcon} alt="" />
                Delete User
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between">
            <div className="py-7">
              <h2 className="text-[16px] font-semibold">Users</h2>
            </div>

            <div className="flex  items-center">
              <div className="relative flex items-center">
                <img
                  className="w-4 h-4 text-[#081D03] absolute pointer-events-none"
                  src={SearchIcon}
                  alt=""
                />
                <input
                  type="text"
                  className="w-10/12 px-7 text-[14px] border-b border-[gradient_custom] bg-[#F7F7F7] focus:border-blue-500 outline-none py-2 text-gray-700"
                  placeholder="Search support id"
                />
              </div>
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-3 rounded-lg hover_gradient_custom border-2 px-5 py-2 border-gradient_custom"
              >
                <img src={AddUserIcon} alt="" />
                Add User
              </button>
            </div>
          </div>
        )}

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 font-semibold text-left"></th>
              <th className="py-2 px-4 bg-gray-100 font-semibold text-left">
                Support ID
              </th>
              <th className="py-2 px-4 bg-gray-100 font-semibold text-left">
                Support Role
              </th>
              <th className="py-2 px-4 bg-gray-100 font-semibold text-left">
                Make Admin
              </th>
              <th className="py-2 px-4 bg-gray-100 font-semibold text-left">
                Lock
              </th>
              <th className="py-2 px-4 bg-gray-100 font-semibold text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => this.handleCheckboxChange(user.id)}
                  />
                </td>
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4 flex gap-4 items-center">
                  <img src={profileIcon} alt="" />
                  {user.role}
                </td>
                <td className="py-2 px-4">
                  {user.role !== "Admin" && (
                    <button
                      onClick={() => this.handleMakeAdmin(user.id)}
                      className="hover_gradient_custom border border-[#7A8177] text-[#7A8177] hover:text-[#ffff] hover:border-none text-[14px] font-semibold py-1 px-3 rounded-full"
                    >
                      Admin
                    </button>
                  )}
                </td>

                {/* Lock User */}
                <td className="py-2 px-4 ">
                  <button className=" text-white font-semibold rounded-full hover_gradient_custom">
                    <img src={lockIcon} alt="" />
                  </button>
                </td>

                {/* Delete User */}
                <td className="py-2 px-4">
                  <button
                    onClick={() => this.handleDeleteSelected(user.id)}
                    className="flex items-center gap-2 border border-[#ED9393] text-[#ED9393] hover_gradient_custom hover:text-[#ffff] text-[14px] font-semibold py-1 px-2 rounded"
                  >
                    <img src={DeleteIcon} alt="" />
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-center gap-3">
          <button
            onClick={() => this.handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            } hover:bg-blue-700 font-semibold py-1 px-2 rounded-l`}
          >
            <img src={leftArrow} alt="" />
          </button>
          <ul className="pagination flex gap-3">
            {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
              (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => this.handlePageChange(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? " gradient_custom rounded-full text-white"
                        : "bg-gray-200"
                    } hover:bg-blue-500 rounded-full hover:text-white font-semibold py-1 px-3 `}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
          <button
            onClick={() => this.handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(users.length / usersPerPage)}
            className={`${
              currentPage === Math.ceil(users.length / usersPerPage)
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
            } hover:bg-blue-700 font-semibold py-1 px-2 rounded-r`}
          >
            <img src={RightArrow} alt="" />
          </button>
        </div>
        {open && <AddUserModal setOpen={setOpen} open={open}></AddUserModal>}
      </div>
    );
  }
}

export default AllUsers;
