/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RightArrow from "../../../assets/AdminDashboard/RightArrow.svg";
import pdfIcon from "../../../assets/AdminDashboard/pdfIcon.svg";
import axios from "axios";
import SERVER_URL from "../../../Shared/config";
import { CircularProgress } from "@mui/material";

const InvoicingTable = ({ isDark, leftArrow }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const updateStatus = async (id, val) => {
        try {
            const res = await axios.post(`${SERVER_URL}/order/update-status/${id}`, {
                status: val
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })

            const data = await res.data;
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getAllOrders = async () => {
        setLoading(true)
        try {
            const res = await axios.post(`${SERVER_URL}/order/all`, {}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            const data = await res.data;
            console.log(data);
            if (data && data.orders) {
                setOrders(data?.orders)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getAllOrders();
    }, [])
    return (
        <>
            <div className="h-full overflow-x-auto">
                {loading ? <CircularProgress /> :
                    <table className="w-full border-collapse overflow-x-auto">
                        <thead className="overflow-x-auto">
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
                                <th className={`py-2 px-4 mid-sm:text-[16px] text-[14px]  ${isDark ? 'bg-gray-100' : 'text-[#272c35]'} font-semibold text-left`}>
                                    PDF
                                </th>
                            </tr>
                        </thead>

                        <tbody className="overflow-x-auto">

                            {orders.length > 0 ?
                                orders.map((v) => (

                                    <tr key={v?._id} className="border text-left overflow-x-auto">
                                        <td className={"py-2 px-4 " + (isDark ? "text-white" : "text-black")}>{v.nickname}</td>
                                        <td className={"py-2 px-4 " + (isDark ? "text-white" : "text-black")}>{v.email}</td>
                                        <td className={"py-2 px-4 " + (isDark ? "text-white" : "text-black")}>{v.full_Name}</td>
                                        <td className={"py-2 px-4 " + (isDark ? "text-white" : "text-black")}>{v.send_Date}</td>
                                        <td className={"py-2 px-4 " + (isDark ? "text-white" : "text-black")}>£{v.price}</td>
                                        <td className={"py-2 px-4 " + (isDark ? "text-white" : "text-black")}>{v.invoice_Number}</td>
                                        <td className={"py-2 px-4 " + (isDark ? "text-white" : "text-black")}>
                                            <select
                                                onChange={(e) => updateStatus(v?._id, e.target.value)}
                                                defaultValue={v.status} className={isDark ? "bg-black text-white" : "bg-white text-black"} name="" id="">
                                                <option value="Sent">Sent</option>
                                                <option value="Paid">Paid</option>
                                                <option value="Overdue">Overdue</option>
                                                <option value="Void">Void</option>
                                                <option value="Refunded">Refunded</option>
                                            </select>
                                        </td>
                                        <td className={"py-2 px-4 " + (isDark ? "text-white" : "text-black")}>{v.product_Description}</td>
                                        <td className={"py-2 px-4 " + (isDark ? "text-white" : "text-black")}>
                                            <img src={pdfIcon} alt="" className="h-10 w-10 mx-auto object-contain" />
                                            <span className="cursor-pointer hover:underline">View</span>/
                                            <a href={SERVER_URL + "/" + v?.invoice_pdf + ".pdf"} download={"invoice.pdf"} className="cursor-pointer hover:underline no-underline">Download</a>
                                        </td>
                                    </tr>
                                ))

                                : <></>}


                        </tbody>
                    </table>
                }


            </div>

            <div className="mt-4 flex justify-center gap-3">
                <button

                    className={` hover:bg-[#000] border hover:border-[#fff] font-semibold py-1 px-2 rounded-l`}
                >
                    <img src={leftArrow} alt="" />
                </button>
                <ul className="pagination flex gap-3">
                    {Array.from({
                        length: 5,
                    }).map((_, index) => (
                        <li key={index}>
                            <button

                                className={`hover:bg-[#000]  border hover:border-[#fff] bg-gray-400 rounded-full hover:text-white font-semibold py-1 px-3 h-10 w-10`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
                <button

                    className={` hover:bg-[#000]  border hover:border-[#fff]  font-semibold py-1 px-2 rounded-r`}
                >
                    <img src={RightArrow} alt="" />
                </button>
            </div>

        </>
    )
}

export default InvoicingTable