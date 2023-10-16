/* eslint-disable react/prop-types */
// import React from 'react'
import logo from '../../assets/tiempoLogoModal.png'
import close from '../../assets/closeIcon.png'
import DLC from './DLC';
import { usePDF } from 'react-to-pdf';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

const InvoiceModal = ({ setInvoiceMod, currentWatch, extraStrapSelected }) => {
    const { toPDF, targetRef } = usePDF({ filename: 'invoice.pdf' });

    // type {
    //     name: string;
    //     fullname: string;
    //     address: string;
    //     email: string;
    //     senddate: string;
    //     price: number;
    //     invoicenumber: string;
    //     status: string;
    //     productdescription: string;
    //     file: Buffer;
    // }

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(p => ({
            ...p,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
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
            
            toPDF()
        } catch (error) {
            setMessage("Error: " + error.message)
        } finally {
            setLoading(false);
            setFormData({});
        }
    }

    return (
        <div className="fixed z-[999999] top-0 left-0 flex justify-center items-center w-full h-screen bg-[#00000057]">
            <div className="w-full relative overflow-hidden md:w-2/3 lg:w-7/12 rounded-[50px] aspect-none md:h-auto h-full md:aspect-[723/513] bg-[#F7F7F7]">
                <img src={logo} alt="" className="absolute w-24 md:w-32 h-32 object-contain md:top-5 top-0 md:left-5 left-0" />
                <img
                    onClick={() => setInvoiceMod(false)}
                    src={close} alt="" className="absolute top-10 right-10 cursor-pointer w-4 h-4 object-contain" />

                <h2 className="w-full mb-5 uppercase font-semibold text-center mt-[15%]">
                    invoice request
                </h2>
                <p className="w-full text-center md:m-0 my-20 text-xs">
                    Please complete the form. We will then forward your order request along with the invoice and bank payment instructions.
                </p>

                <form className="flex text-xs flex-wrap w-full mb-[100vh] px-4 md:px-20 my-10 justify-between">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="">Full name</label>
                        <input onChange={handleChange} type="text" name='fullname' className="w-11/12 my-2 focus:outline-black p-2 rounded-xl bg-white" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="">Address</label>
                        <input onChange={handleChange} type="text" name='address' className="w-11/12 my-2 focus:outline-black p-2 rounded-xl bg-white" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="">Email address</label>
                        <input onChange={handleChange} type="text" name='email' className="w-11/12 my-2 focus:outline-black p-2 rounded-xl bg-white" />
                    </div>

                    <div className="w-full text-xs text-red-700">
                        {message}
                    </div>

                    <button disabled={loading} onClick={handleSubmit} className="absolute bottom-5 text-white right-20 w-20 shadow-lg h-20 disabled:cursor-not-allowed rounded-full bg-black">
                        {loading ? <CircularProgress /> : "Send"}
                    </button>
                </form>
                <DLC data={formData} extraStrapSelected={extraStrapSelected} currentWatch={currentWatch} targetRef={targetRef} />
            </div>
        </div>
    )
}

export default InvoiceModal