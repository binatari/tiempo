/* eslint-disable react/prop-types */
import { Modal } from "@mui/material";
import { Box } from "@react-three/drei";
import { useState } from "react";
import SERVER_URL from "../../../Shared/config";
import axios from "axios";
import { toast } from "react-hot-toast";
import logo from '../../../assets/TiempoWhiteLogo.png'

const AddUserModal = ({ open, setOpen, updateUsers }) => {


  const [newUserInfo, setNewUserInfo] = useState({
    support_id: "",
    nickname: "",
    password: "",
  });

  console.log(newUserInfo);

  const generateSupportId = async () => {
    try {

      const token = localStorage.getItem("token");
      const response = await fetch(`${SERVER_URL}/user/new-support-id`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const newSupportId = await response.json();
        setNewUserInfo({ ...newUserInfo, support_id: newSupportId.data });

      } else {
        const responseData = await response.json();
        toast.error(responseData?.error)
      }
    } catch (error) {
      toast.error(error.response?.data?.error)
    }
  };

  const handleAddUser = async () => {
    if (newUserInfo.support_id === "") {
      toast.error("Support ID is required")

      return;
    }
    if (newUserInfo.nickname === "") {
      toast.error("Nickname is required")

      return;
    }

    if (newUserInfo.password === "") {
      toast.error("Password is required")
      return;
    }


    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${SERVER_URL}/user/register`,
        newUserInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        updateUsers(response.data.data);

        toast.success(response.data.message)

        setNewUserInfo({
          support_id: "",
          nickname: "",
          password: "",
        });
      } else {
        const responseData = await response.json();
        toast.error(responseData?.error)
      }
    } catch (error) {
      toast.error(error.response?.data?.error)
    }
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <div className="py-10 px-8 md:py-0 md:px-0 lg:w-5/12 md:w-2/3 w-full md:mx-auto md:absolute lg:left-[30%] md:top-[16%] lg:top-[10%] md:left-[15%]">
          <div className="flex items-start justify-between p-2   bg-white">
            <button
              className="px-2 py-1 ml-auto text-black hover:bg-red-600 hover:text-white text-sm rounded-md font-medium "
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>

          <div className="bg-white h-[530px] md:h-[530px] mid-xl:h-[530px] relative ">
            <div className="flex justify-center items-center pb-8">
              <img
                className="md:w-[150px] w-[150px]"
                src={logo}
                alt=""
              />
            </div>
            <div className="md:w-8/12 w-10/12 mx-auto">
              <label className="block my-3 ">
                <div className="w-full flex justify-between font-medium text-secondary">
                  <div>ID</div>
                  <div>
                    <button onClick={generateSupportId}> + generate id</button>
                  </div>
                </div>
                <input
                  type="text"
                  className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder-gray-700 hover:border-blue-600 focus:border-blue-600 block w-full rounded-md sm:text-sm"
                  placeholder="Support ID"
                  value={newUserInfo.support_id}
                  readOnly
                />
              </label>
              <label className="block my-3 ">
                <div className="w-full font-medium text-secondary">
                  <h1>Nickname</h1>
                </div>
                <input
                  type="text"
                  className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder-gray-700 hover:border-blue-600 focus:border-blue-600 block w-full rounded-md sm:text-sm"
                  placeholder="Nickname"
                  value={newUserInfo.nickname}
                  onChange={(e) => {
                    setNewUserInfo({
                      ...newUserInfo,
                      nickname: e.target.value,
                    });

                  }}
                />
              </label>

              <label className="block my-3 ">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-secondary">
                  Password
                </span>
                <input
                  type="email"
                  className="mt-1 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder-gray-700 hover:border-blue-600 focus:border-blue-600 block w-full rounded-md sm:text-sm"
                  name="email"
                  placeholder="Password"
                  value={newUserInfo.password}
                  onChange={(e) => {
                    setNewUserInfo({
                      ...newUserInfo,
                      password: e.target.value,
                    });

                  }}
                />
              </label>

              <div
                onClick={handleAddUser}
                className="w-full gradient_custom text-center text-white font-medium py-2 cursor-pointer"
              >
                <button className=" uppercase ">Add User</button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
