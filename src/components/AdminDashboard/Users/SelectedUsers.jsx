/* eslint-disable react/prop-types */

const SelectedUsers = ({ isDark, selectedUsers, handleUnselect, setShowConfirmDeleteModal, DeleteIcon }) => {
    return (
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
    )
}

export default SelectedUsers