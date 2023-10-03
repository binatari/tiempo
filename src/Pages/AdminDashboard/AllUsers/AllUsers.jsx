import { useContext, useEffect, useState } from "react";
import axios from "axios";
import whiteLockIcon from "../../../assets/AdminDashboard/whiteLockIcon.svg";
import BlackLockIcon from "../../../assets/AdminDashboard/BlackLockIcon.svg";


import unlockWhite from "../../../assets/AdminDashboard/whiteUnLockIcon.svg";
import unlockBlack from "../../../assets/AdminDashboard/BlackUnLockIcon.svg";

import profileIcon from "../../../assets/AdminDashboard/Profile.svg";
import SearchIcon from "../../../assets/AdminDashboard/Search.svg";
import adminIcon from "../../../assets/AdminDashboard/adminIcon.svg";
import AddUserIcon from "../../../assets/AdminDashboard/Add-User.svg";
import DeleteIcon from "../../../assets/AdminDashboard/Delete.svg";
import RightArrow from "../../../assets/AdminDashboard/RightArrow.svg";
import leftArrow from "../../../assets/AdminDashboard/leftArrow.svg";
import AddUserModal from "../AddUserModal/AddUserModal";
import SERVER_URL from "../../../Shared/config";
import logo from '../../../assets/TiempoWhiteLogo.png'
import logoBlack from '../../../assets/TiempoBlackLogo.png'

import ConfirmModal from "../../../Shared/ConfirmModal/ConfirmModal";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../Context/MainContext";
import logout from '../../../assets/logout.svg'
import ToggleButton from "../../../Utils/ToggleButton/ToggleButton";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [open, setOpen] = useState(false);

  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [showConfirmLockModal, setShowConfirmLockModal] = useState(false);
  const [showConfirmUnLockModal, setShowConfirmUnLockModal] = useState(false);
  const [showConfirmUnAdminModal, setShowConfirmAdminModal] = useState(false);
  const [storingSupportId, setStoringSupportId] = useState("");
  const handleClose = () => {
    setShowConfirmDeleteModal(false);
    setShowConfirmLockModal(false);
    setShowConfirmUnLockModal(false);
    setShowConfirmAdminModal(false);
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${SERVER_URL}/user/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const json = await response.json();
        setUsers(json.data);
      } else {
        const responseData = await response.json();
        toast.error(responseData?.error);
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateUsers = (newUsers) => {
    setUsers(newUsers);
  };

  const handleMakeAdmin = (support_id) => {
    const token = localStorage.getItem("token");

    const data = {
      support_id: support_id,
      fieldName: "role",
      value: "admin",
    };

    axios
      .patch(`${SERVER_URL}/user/update/info`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response?.data?.data);
        toast.success(response?.data?.message);
        setShowConfirmAdminModal(false);
      })
      .catch((error) => {
        if (error?.response?.data?.error) {
          toast.error(error?.response?.data?.error);
        }
        setShowConfirmAdminModal(false);
      });
  };

  const handleMakeUnlock = (support_id) => {
    const token = localStorage.getItem("token");

    const data = {
      support_id: support_id,
      fieldName: "status",
      value: "unlocked",
    };

    axios
      .patch(`${SERVER_URL}/user/update/info`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response?.data?.data);
        toast.success(response?.data?.message);
        setShowConfirmUnLockModal(false);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
        setShowConfirmUnLockModal(false);
      });
  };

  const handleMakelock = (support_id) => {
    const token = localStorage.getItem("token");

    const data = {
      support_id: support_id,
      fieldName: "status",
      value: "locked",
    };

    axios
      .patch(`${SERVER_URL}/user/update/info`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response?.data?.data);
        toast.success(response?.data?.message);
        setShowConfirmLockModal(false);
      })
      .catch((error) => {
        if (error?.response?.data?.error) {
          toast.error(error?.response?.data?.error);
        }
        setShowConfirmLockModal(false);
      });
  };

  const handleCheckboxChange = (support_id) => {
    if (selectedUsers.includes(support_id)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== support_id));
    } else {
      setSelectedUsers([...selectedUsers, support_id]);
    }
  };

  const handleSearch = (input) => {
    setSearchInput(input);

    const filtered = users?.filter((user) => {
      console.log(user);
      return user?.support_id?.includes(input) || user?.nickname?.toLowerCase().includes(input?.toLowerCase());
    });
    setFilteredUsers(filtered);
  };

  const handleDeleteSelected = () => {
    const token = localStorage.getItem("token");

    const requestData = {
      supportIds: selectedUsers,
    };

    axios
      .delete(`${SERVER_URL}/user/delete-users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: requestData,
      })
      .then((response) => {
        setUsers(response.data.data);
        setSelectedUsers([]);
        handleClose();

        toast.success(response?.data?.message);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
        handleClose();
      });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const usersToDisplay = searchInput ? filteredUsers : users;

  const handleUnselect = () => {
    setSelectedUsers([]);
  };
  const navigate = useNavigate()

  const handleLogOut = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate('/login')
    }
  };
  console.log(usersToDisplay);
  const { isDark } = useContext(Context)
  return (
    <div className={` ${isDark ? 'bg-[#000000]' : 'bg-white'} min-h-screen`}>
      <div className="flex justify-between items-center px-5 lg:px-20 py-2">
        <ToggleButton />
        <Link to={'/'}>
          <div className={`  ${isDark ? 'bg-[#000000]' : 'bg-white'} flex justify-center items-center cursor-pointer `}>
            {
              isDark ?
                <img src={logo} alt="logo" className="h-16 w-16 mr-5 md:mr-8 lg:mr-5" />
                :
                <img src={logoBlack} alt="logo" className="h-16 w-16 mr-5 md:mr-8 lg:mr-5" />}
          </div>
        </Link>
        <img className={`text-sm cursor-pointer w-16 h-16`} src={logout} alt="" onClick={handleLogOut} />
      </div>

      <div className="w-11/12 py-3  mx-auto ">
        <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-[#272c35]'}`}>All Users</h2>
        {selectedUsers?.length > 0 ? (
          <div className="flex justify-between items-center ">
            <div className="flex gap-x-2 items-center py-7">
              <p className={`mid-sm:text-[16px] text-[14px] font-semibold ${isDark ? 'text-white' : 'text-[#272c35]'}`}>
                {selectedUsers?.length} user selected
              </p>
              <button
                onClick={handleUnselect}
                className={`mid-sm:text-[16px] text-[14px] border rounded px-2 py-1 hover:bg-[#000000]  ${isDark ? 'text-white hover:bg-[#ffffff] hover:text-[#000000]' : 'hover:text-[#fff]'}`}
              >
                {" "}
                Unselect all
              </button>
            </div>
            <div>
              <button
                onClick={() => setShowConfirmDeleteModal(true)}
                className={`mid-sm:text-[16px] flex items-center gap-3 border border-gray-300 text-[#000000] hover:bg-[#000000]  text-[14px] font-semibold py-2 px-2 rounded ${isDark ? 'text-white hover:bg-[#ffffff] hover:text-[#000000]' : 'hover:text-[#ffffff] '}`}
              >
                <img className="md:block hidden text-[15px]" src={DeleteIcon} alt="delete icon" />
                Delete User
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between">
            <div className="py-7">
              <h2 className={`mid-xs:text-[15px] xs:text-[12px] md:text-[16px] font-semibold ${isDark ? 'text-white' : 'text-[#272c35]'}`}>Users</h2>
            </div>

            <div className="flex items-center">
              <div className="relative flex items-center mid-xs:ml-0 mr-5 px-1">
                <img
                  className=" mid-sm:w-4 mid-sm:h-4 w-3 h-3 text-[#081D03] absolute pointer-events-none md:ml-2 left-2"
                  src={SearchIcon}
                  alt="search icon"
                />
                <input
                  onChange={(e) => handleSearch(e.target.value)}
                  type="text"
                  className=" w-full  mid-sm:w-10/12 md:px-7 pl-5 mid-xs:px-4  rounded-sm mid-sm:text-[14px]  text-[12px] border-b border-[gradient_custom] bg-[#F7F7F7] focus:border-[#000000] outline-none py-2 text-gray-700"
                  placeholder="Search support ID"
                />
              </div>
              <button
                onClick={() => setOpen(true)}
                className={`mid-sm:ml0 ml-4 flex items-center gap-1 md:gap-3 rounded-lg hover:bg-[#000000] border-2 px-2 md:px-5 py-2 border-gradient_custom mid-xs:text-[13px] xs:text-[10px] md:text-[16px]  ${isDark ? 'text-white hover:bg-[#ffffff] hover:text-[black]' : 'hover:text-white'}`}
              >
                {
                  !isDark &&
                  <img className="hidden mid-xs:block" src={AddUserIcon} alt="add user icon" />
                }
                Add User
              </button>
            </div>
          </div>
        )}
        <div className="h-full overflow-x-auto">
          <table className="w-full border-collapse overflow-x-auto">
            <thead className="overflow-x-auto">
              <tr>
                <th className={`py-2 px-4  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}></th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px] ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                  Support ID
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px] ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                  Nickname
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                  Support Role
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                  Make Admin
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                  Lock
                </th>
              </tr>
            </thead>

            <tbody className="overflow-x-auto">
              {usersToDisplay
                ?.slice(indexOfFirstUser, indexOfLastUser)
                .map((user, index) => {
                  const { support_id, nickname, role, status } = user;
                  return (
                    <tr key={index} className="border overflow-x-auto">
                      <td className="py-2 px-4">
                        <input
                          className="accent-gray-400"
                          type="checkbox"
                          checked={selectedUsers.includes(support_id)}
                          onChange={() => handleCheckboxChange(support_id)}
                        />
                      </td>
                      <td className={`py-2 px-4 ${isDark ? 'text-white' : 'text-[#272c35]'}`}>{support_id}</td>

                      <td className={`py-2 px-4 ${isDark ? 'text-white' : 'text-[#272c35]'}`}>{nickname}</td>

                      <td className={`py-2  flex gap-3 uppercase items-center ${isDark ? 'text-white px-8' : 'text-[#272c35] px-4'}`}>
                        {
                          isDark ? '' : <>
                            {role === "admin" ? (
                              <img src={adminIcon} alt="icon" className="w-5 h-5" />
                            ) : (
                              <img
                                src={profileIcon}
                                alt="icon"
                                className="w-5 h-5"
                              />
                            )}
                          </>
                        }

                        {role}
                      </td>
                      <td className="py-2 px-4">
                        {user.role !== "admin" ? (
                          <button
                            onClick={() => {
                              setStoringSupportId(support_id);
                              setShowConfirmAdminModal(true);
                            }}
                            className={` hover:bg-[#000000] border    border-[#7A8177] hover:border-none text-[14px] font-semibold py-1 px-3 rounded-full ${isDark ? 'text-white hover:bg-[#ffffff] hover:text-[#000000]' : 'hover:text-[#ffff]'}`}
                          >
                            Admin
                          </button>
                        ) : (
                          <button
                            className={` bg-[#000000] border border-[#7A8177]    text-[14px] font-semibold py-1 px-3 rounded-full cursor-not-allowed ${isDark ? ' bg-[#ffffff] text-[#000000]' : 'text-[#ffffff]'}`}
                          >
                            Admin
                          </button>
                        )}
                      </td>

                      <td className="py-2 px-4 ">
                        {status === "locked" ? (
                          <button
                            onClick={() => {
                              setShowConfirmUnLockModal(true);
                              setStoringSupportId(support_id);
                            }}
                            className=" text-white font-semibold rounded-full "
                          >
                            {isDark ?
                              <img src={whiteLockIcon} alt="locked icon" className="border border-[#fff] rounded-full" />
                              :
                              <img src={BlackLockIcon} alt="locked icon" className="border border-[#000] rounded-full" />
                            }

                          </button>
                        ) : (
                          <button
                            // onClick={() => handleMakelock(support_id)}
                            onClick={() => {
                              setShowConfirmLockModal(true);
                              setStoringSupportId(support_id);
                            }}
                            className="bg-[#000000]  text-white font-semibold rounded-full "
                          >
                            <span>
                              {isDark ?
                                <img src={unlockWhite} alt="unlocked icon" />
                                :
                                <img src={unlockBlack} alt="unlocked icon" />
                              }

                            </span>
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {usersToDisplay?.length === 0 && (
            <div className="py-10">
              <p className={`text-center ${isDark ? 'text-white' : 'text-[#272c35]'}`}>No user to display.</p>
            </div>
          )}
        </div>
        {usersToDisplay?.length > 0 && (
          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`${currentPage === 1
                ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
                } hover:bg-[#000] border hover:border-[#fff] font-semibold py-1 px-2 rounded-l`}
            >
              <img src={leftArrow} alt="" />
            </button>
            <ul className="pagination flex gap-3">
              {Array.from({
                length: Math.ceil(usersToDisplay.length / usersPerPage),
              }).map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`${currentPage === index + 1
                      ? " rounded-full text-white"
                      : "bg-[#000000]"
                      } hover:bg-[#000]  border hover:border-[#fff] bg-gray-400 rounded-full hover:text-white font-semibold py-1 px-3 `}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(usersToDisplay.length / usersPerPage)
              }
              className={`${currentPage === Math.ceil(usersToDisplay.length / usersPerPage)
                ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white"
                } hover:bg-[#000]  border hover:border-[#fff]  font-semibold py-1 px-2 rounded-r`}
            >
              <img src={RightArrow} alt="" />
            </button>
          </div>
        )}

        {showConfirmDeleteModal && (
          <ConfirmModal
            open={showConfirmDeleteModal}
            handleClose={() => handleClose()}
            onConfirm={handleDeleteSelected}
            content={`Are you sure you want to delete users?`}
          />
        )}
        {showConfirmLockModal && (
          <ConfirmModal
            open={showConfirmLockModal}
            handleClose={() => handleClose()}
            onConfirm={() => handleMakelock(storingSupportId)}
            content={`Are you sure you want to lock this account?`}
          />
        )}
        {showConfirmUnLockModal && (
          <ConfirmModal
            open={showConfirmUnLockModal}
            handleClose={() => handleClose()}
            onConfirm={() => handleMakeUnlock(storingSupportId)}
            content={`Are you sure you want to unlock this account?`}
          />
        )}
        {showConfirmUnAdminModal && (
          <ConfirmModal
            open={showConfirmUnAdminModal}
            handleClose={() => handleClose()}
            onConfirm={() => handleMakeAdmin(storingSupportId)}
            content={`Are you sure you want to make this account an admin?`}
          />
        )}

        {open && (
          <AddUserModal
            open={open}
            setOpen={setOpen}
            updateUsers={updateUsers}
          ></AddUserModal>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
