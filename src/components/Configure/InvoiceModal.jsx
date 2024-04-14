/* eslint-disable react/prop-types */
// import React from 'react'
import logo from '../../assets/tiempoLogoModal.png'
import close from '../../assets/closeIcon.png'
import DLC from './DLC';
import generatePDF from 'react-to-pdf';
import { useEffect, useRef, useState } from 'react';
import { CircularProgress } from '@mui/material';
import axios, { AxiosError } from 'axios';
import SERVER_URL from '../../Shared/config';
import { toast } from "react-hot-toast";

function blobToFile(blob, fileName) {
    // Create a new File object with the Blob and fileName
    const file = new File([blob], fileName, { type: blob.type });
    return file;
}

const InvoiceModal = ({ setInvoiceMod, currentWatch, extraStrapSelected, click }) => {
    const targetRef = useRef();
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");
    const [invoiceNum, setInvoiceNum] = useState(0);
    const [loading, setLoading] = useState(false);
    const totalWatchPrice = currentWatch[0][2] + currentWatch[1][2] + currentWatch[2][2];
    const handleChange = (e) => {
        setFormData(p => ({
            ...p,
            [e.target.name]: e.target.value
        }))
    }



    const strapPrice = extraStrapSelected?.reduce((acc, curr) => acc + curr[2], 0);

    const genInvoiceNum = async () => {
        try {
            const res = await axios.patch(`${SERVER_URL}/invoice/generate`, {}, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });

            const data = await res.data;

            console.log(data)
            if (data.invoiceNumber) {
                setInvoiceNum(data.invoiceNumber)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        genInvoiceNum()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (!formData.fullname || formData.fullname.length === 0) {
                setMessage("Please enter a full name!");
                return false;
            } else if (!formData.email || formData.email.length === 0 || !formData.email.includes("@")) {
                setMessage("Please enter valid email!");
                return false;
            } else if (!formData.address || formData.address.length === 0) {
                setMessage("Please enter valid address!");
                return false;
            }

            const response = await generatePDF(targetRef, { filename: 'invoice.pdf' })
            const data2 = response.output("blob")

            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
                //'Content-Type': 'applcation/form-data',
            };
            const currentUserRes = await axios.get(`${SERVER_URL}/user/me`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            const currUserData = await currentUserRes.data;
            console.log(currUserData);

            const pdfFile = blobToFile(data2, "invoice.pdf");
            console.log(pdfFile);

            const newFormData = new FormData();
            newFormData.append('nickname', String(currUserData?.data?.support_id));
            newFormData.append('full_Name', formData.fullname);
            newFormData.append('address', formData.address);
            newFormData.append('email', formData.email);
            newFormData.append('send_Date', new Date().toDateString());
            newFormData.append('price', totalWatchPrice);
            newFormData.append('invoice_Number', invoiceNum);
            newFormData.append('product_Description', 'Sample product description');
            newFormData.append('invoice_pdf', pdfFile);
            newFormData.append('status', "Sent");


            const genInvoiceRes = await axios.post(`${SERVER_URL}/order/upload`, newFormData, { headers });
            const data = await genInvoiceRes.data;
            console.log(data)
            toast.success("Thank you for submitting your order! A confirmation mail is sent to your email id.", {
                duration: 3000
            })
            setInvoiceMod(false);
        } catch (error) {
            setMessage("Error: " + error.message)
            if (error instanceof AxiosError) {
                console.log(error)
                console.log(error?.response?.data)
            } else console.log(error)
        } finally {
            setLoading(false);
            setFormData({});
        }
    }

    return (
        <div className="fixed z-[999999] top-0 left-0 flex justify-center items-center w-full h-screen bg-[#00000057]">

            <div className=" overflow-scroll relative md:w-2/3 lg:w-7/12 rounded-[50px] aspect-none md:h-auto h-full md:aspect-[723/513] bg-[#F7F7F7]">
                <img src={logo} alt="" className="absolute w-24 md:w-32 h-32 object-contain md:top-5 top-0 md:left-5 left-0" />
                <img
                    onClick={() => setInvoiceMod(false)}
                    src={close} alt="" className="absolute top-10 right-10 cursor-pointer w-4 h-4 object-contain" />
                <div className='px-4'>
                <h2 className="w-full mb-5 uppercase font-semibold text-center mt-[15%]">
                   Review purchase details
                </h2>
                <p className="w-full text-center md:m-0 my-20 text-xs">
                    Please Review the purchase details before proceeding
                </p>
                <table className="w-full border-collapse border-t-2 border-[#a6a6a6] border-b-2 my-2 mt-10 overflow-auto">
                <thead>
                    <tr>
                        <th className="w-1/3 text-left uppercase  py-2">Description <br /></th>
                        <th className="w-1/3 text-center uppercase  py-2">UNITS <br /></th>
                        <th className="w-1/3 text-center uppercase  py-2">UNIT PRICE <br /></th>
                        <th className="w-1/3 text-center uppercase  py-2 whitespace-nowrap">AMOUNT (GBP) <br /></th>
                    </tr>
                    <tr>
                        <th className="w-1/3"><hr className="mt-2 border-t-2 border-[#a6a6a6] w-full" /></th>
                        <th className="w-1/3"><hr className="mt-2 border-t-2 border-[#a6a6a6] w-full" /></th>
                        <th className="w-1/3"><hr className="mt-2 border-t-2 border-[#a6a6a6] w-full" /></th>
                        <th className="w-1/3"><hr className="mt-2 border-t-2 border-[#a6a6a6] w-full" /></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="w-1/3  py-2">
                            {currentWatch[0][1]}, {currentWatch[3]} mm<br />
                            {currentWatch[1][1]}<br />
                            {currentWatch?.[2]?.[1] ?? ""} <br />
                            Final Sale - *Item not returnable*
                        </td>
                        <td className="w-1/3 text-center  py-2">1</td>
                        <td className="w-1/3 text-center  py-2">£{totalWatchPrice}</td>
                        <td className="w-1/3 text-center  py-2">£{totalWatchPrice}</td>
                    </tr>
                    {extraStrapSelected && extraStrapSelected?.length > 0 &&
                        <tr>
                            <td className="w-1/3  py-2 ">
                                Extra strap
                            </td>
                            <td className="w-1/3 text-center  py-2">{extraStrapSelected?.length}</td>
                            <td className="w-1/3 text-center  py-2">£{extraStrapSelected?.[0]?.[2]}</td>
                            <td className="w-1/3 text-center  py-2">£{strapPrice}</td>
                        </tr>
                    }

                    <br />
                </tbody>
            </table>

            <div className="flex justify-end w-full mt-10">
                <div className="w-1/3">
                    <div className="w-full flex my-4 justify-between">
                        <p>Total</p>
                        <p>£{totalWatchPrice + strapPrice}.00</p>
                    </div>
                    <br />
                    <hr className="mt-2 border-t-2 border-[#A6A6A6] w-full" />

                    <div className="w-full flex my-4 justify-between">
                        <p>Amount Due</p>
                        <p>£{totalWatchPrice + strapPrice}.00</p>
                    </div>
                </div>
            </div> <br /> <br />
                </div>

                <h2 className="w-full mb-5 uppercase font-semibold text-center mt-[15%]">
                    invoice request
                </h2>
                <p className="w-full text-center md:m-0 my-20 text-xs">
                    Please complete the form. We will then forward your order request along with the invoice and bank payment instructions.
                </p>

                <form className="flex text-xs flex-wrap w-full px-8 md:px-20 my-10 justify-between">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="">Full name</label>
                        <input
                            value={formData.fullname || ""}
                            onChange={handleChange} type="text" name='fullname' className="w-11/12 my-2 focus:outline-black p-2 rounded-xl bg-white" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="">Address</label>
                        <input
                            value={formData.address || ""}
                            onChange={handleChange} type="text" name='address' className="w-11/12 my-2 focus:outline-black p-2 rounded-xl bg-white" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="">Email address</label>
                        <input
                            value={formData.email || ""}
                            onChange={handleChange} type="text" name='email' className="w-11/12 my-2 focus:outline-black p-2 rounded-xl bg-white" />
                    </div>

                    <div className="w-full text-xs text-red-700">
                        {message}
                    </div>

     
                </form>
                <button disabled={loading} onClick={handleSubmit} className="absolute 
                    text-white right-20 w-20 shadow-lg h-20 disabled:cursor-not-allowed rounded-full bg-black">
                        {loading ? <CircularProgress /> : "Send"}
                    </button>
                <div className='hidden'>
                <DLC invoiceNum={invoiceNum} data={formData} extraStrapSelected={extraStrapSelected} currentWatch={currentWatch} targetRef={targetRef} />
                </div>
            </div>
          

        </div>
    )
}

export default InvoiceModal