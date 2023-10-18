/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RightArrow from "../../../assets/AdminDashboard/RightArrow.svg";
import pdfIcon from "../../../assets/AdminDashboard/pdfIcon.svg";
import axios from "axios";
import SERVER_URL from "../../../Shared/config";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import Headings from "./Headings";


const InvoicingTable = ({ isDark, leftArrow, invNum }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [opacity, setOpacity] = useState(0);
    // const [pdfUrl, setPdfUrl] = useState("");

    const openSnackBar = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


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
            if (data && data.message && data.message === "Order status updated") {
                const idx = orders.findIndex(v => v._id === id);
                //console.log(idx)
                const newOrders = orders;
                newOrders[idx].status = val;
                setOrders(newOrders);
                setMessage("Status updated successfully");
                openSnackBar();
            } else {
                setMessage("Failed to update status!")
            }
            console.log(data)
        } catch (error) {
            console.log(error)
            setMessage("Failed to update status!")
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
        setOpacity(1);
        getAllOrders();
    }, [])



    const indexOfLastItem = currentPage * itemsPerPage;
    // Calculate the index of the first item to display on the current page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Slice the orders array to display only the items for the current page
    console.log(invNum)
    const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem)?.filter(item => String(item?.invoice_Number)?.includes(invNum));

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // Function to check if "Previous" button should be disabled
    const isPrevDisabled = currentPage === 1;

    // Function to check if "Next" button should be disabled
    const isNextDisabled = currentPage === Math.ceil(orders.length / itemsPerPage);

    const handleDownload = async (id, invNumber) => {
        try {
            const response = await axios.get(`${SERVER_URL}/order/download/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                responseType: 'blob'
            });
            const data = await response.data;
            console.log(data);
            if (data) {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                // Create a temporary link to trigger the download
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${invNumber}.pdf`);
                document.body.appendChild(link);
                link.click();
                // Clean up
                window.URL.revokeObjectURL(url);
            }

        } catch (error) {
            console.log(error);
            setMessage("Something went wrong downloading invoice!")
            openSnackBar();
        }
    }

    const handleView = async (id) => {
        try {
            const response = await axios.get(`${SERVER_URL}/order/download/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                responseType: 'blob'
            });
            const data = await response.data;
            console.log(data);
            if (data) {

                //Clean up
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
               // setPdfUrl(url);
                window.open(url, '_blank');
                console.log(url)

            }
        } catch (error) {
            setMessage("Something went wrong viewing pdf!")
            openSnackBar()
        }
    }

    return (
        <>
            {/* <div className="text-white" style={{ width: '100%', height: '200px' }}>
                <iframe src={pdfUrl} className="w-full h-full"></iframe>
            </div> */}

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message={message}
            >
                <Alert severity={message?.includes("success") ? "success" : "error"}>{message}</Alert>
            </Snackbar>
            <div
                style={{ opacity }}
                className="h-full overflow-x-auto transition-all ease-in-out duration-500">
                {loading ? <CircularProgress /> :
                    <table className="w-full border-collapse overflow-x-auto">

                        <Headings isDark={isDark} />

                        <tbody className="overflow-x-auto">

                            {orders.length > 0 ?
                                currentItems.map((v) => (

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
                                                defaultValue={v.status} className={isDark ? "bg-black text-white" : "bg-white focus:outline-none active:outline-none text-black"} name="" id="">
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
                                            <span
                                                onClick={() => handleView(v?.invoice_pdf)}
                                                className="cursor-pointer hover:underline">View</span>/
                                            <span onClick={() => handleDownload(v?.invoice_pdf, v?.invoice_Number)} className="cursor-pointer hover:underline no-underline">Download</span>
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
                    disabled={isPrevDisabled}
                    className={`hover:bg-gray-700 disabled:bg-gray-500 disabled:cursor-not-allowed border hover:border-[#fff] font-semibold py-1 px-2 rounded-l`}
                    onClick={() => paginate(currentPage - 1)}
                >
                    <img src={leftArrow} alt="" />
                </button>
                <ul className="pagination flex gap-3">
                    {Array.from({
                        length: Math.ceil(orders.length / itemsPerPage),
                    }).map((_, index) => (
                        <li key={index}>
                            <button
                                disabled={currentPage === index + 1}
                                className={`hover:bg-black border hover:border-[#fff] rounded-full hover:text-white font-semibold py-1 px-3 h-10 w-10 ` + (currentPage === (index + 1) ? "bg-black text-white" : "bg-gray-400 text-black")}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    disabled={isNextDisabled}
                    className={`hover:bg-gray-700 disabled:bg-gray-500 disabled:cursor-not-allowed border hover:border-[#fff] font-semibold py-1 px-2 rounded-r`}
                    onClick={() => paginate(currentPage + 1)}
                >
                    <img src={RightArrow} alt="" />
                </button>
            </div>

        </>
    )
}

export default InvoicingTable