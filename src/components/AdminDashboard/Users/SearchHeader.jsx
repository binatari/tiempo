/* eslint-disable react/prop-types */


const SearchHeader = ({ isDark, SearchIcon, handleSearch, setOpen, AddUserIcon, currentTab, setCurrentTab, setInvNum }) => {
    return (
        <div className="flex justify-between">
            <div className="py-7 flex gap-4">
                <h2
                    onClick={() => {
                        setCurrentTab("Users")
                    }}
                    className={`mid-xs:text-[15px] cursor-pointer xs:text-[12px] md:text-[16px] font-semibold ${isDark ? 'text-white' : 'text-[#272c35]'} p-3 ${currentTab === "Users" ? ` ${isDark ? `border border-white rounded-xl` : "border border-black rounded-xl"} ` : ""}`}>Users</h2>
                <h2
                    onClick={() => {
                        setCurrentTab("Invoicing");
                    }}
                    className={`mid-xs:text-[15px] cursor-pointer xs:text-[12px] md:text-[16px] font-semibold ${isDark ? 'text-white' : 'text-[#272c35]'} p-3 ${currentTab === "Invoicing" ? ` ${isDark ? `border border-white rounded-xl` : "border border-black rounded-xl"} ` : ""}`}>Invoicing System</h2>
            </div>

            <div className="flex items-center">
                {currentTab === "Users" ?
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
                    :
                    <div className="relative flex items-center mid-xs:ml-0 mr-5 px-1">
                        <img
                            className=" mid-sm:w-4 mid-sm:h-4 w-3 h-3 text-[#081D03] absolute pointer-events-none md:ml-2 left-2"
                            src={SearchIcon}
                            alt="search icon"
                        />
                        <input
                            onChange={(e) => setInvNum(e.target.value)}
                            type="text"
                            className=" w-full  mid-sm:w-10/12 md:px-7 pl-5 mid-xs:px-4  rounded-sm mid-sm:text-[14px]  text-[12px] border-b border-[gradient_custom] bg-[#F7F7F7] focus:border-[#000000] outline-none py-2 text-gray-700"
                            placeholder="Search Ref Number"
                        />
                    </div>
                }

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
    )
}

export default SearchHeader