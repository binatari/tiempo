/* eslint-disable react/prop-types */
// import React from 'react'
import logo from '../../assets/tiempoLogoModal.png'
import close from '../../assets/closeIcon.png'
import DLC from './DLC';
import { usePDF } from 'react-to-pdf';

const InvoiceModal = ({ setInvoiceMod, currentWatch, extraStrapSelected }) => {
    const { toPDF, targetRef } = usePDF({ filename: 'invoice.pdf' });
    // const sendData = () => {
    //     const formData = new FormData();
    //     formData.append("name", "Lcuky");
    //     formData.append("address", "address");
    //     formData.append("email", "email@test.com");
    // }

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
                        <input type="text" className="w-11/12 my-2 focus:outline-black p-2 rounded-xl bg-white" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="">Address</label>
                        <input type="text" className="w-11/12 my-2 focus:outline-black p-2 rounded-xl bg-white" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="">Email address</label>
                        <input type="text" className="w-11/12 my-2 focus:outline-black p-2 rounded-xl bg-white" />
                    </div>

                    <button onClick={(e) => {
                        e.preventDefault()
                        toPDF()
                    }} className="absolute bottom-5 text-white right-20 w-20 shadow-lg h-20 rounded-full bg-black">
                        Send
                    </button>
                </form>
                <DLC extraStrapSelected={extraStrapSelected} currentWatch={currentWatch} targetRef={targetRef} />
            </div>
        </div>
    )
}

export default InvoiceModal