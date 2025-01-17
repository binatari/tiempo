/* eslint-disable react/prop-types */

const Headings = ({ isDark }) => {
    return (
        <thead className="overflow-x-auto whitespace-nowrap">
            <tr>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px] ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                    Generated By
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px] ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                    Send To
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                    Full Name
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                    Send Date
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                    Price
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                    Invoice Ref Number
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                    Status
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                    Product Description
                </th>
                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-center`}>
                    PDF
                </th>
            </tr>
        </thead>
    )
}

export default Headings