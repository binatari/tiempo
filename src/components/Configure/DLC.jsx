/* eslint-disable react/prop-types */

import logo from '../../assets/tiempoLogoModal.png'

// eslint-disable-next-line react/prop-types
export default function DLC({ targetRef, currentWatch, extraStrapSelected, data, invoiceNum }) {
    console.log(currentWatch)
    console.log(extraStrapSelected)
    const strapPrice = extraStrapSelected?.reduce((acc, curr) => acc + curr[2], 0);
    console.log(strapPrice)
    const totalWatchPrice = currentWatch[0][2] + currentWatch[1][2] + currentWatch[2][2];
    return (
        <div className="w-screen p-10 text-xl relative" ref={targetRef}>
            <div className="flex w-full items-start justify-between">
                <div>
                    <img src={logo} alt="" className="w-48 h-48 absolute top-2 left-0 object-contain" />
                    <br /> <br /> <br /> <br />
                    <div className="w-44">

                    RW Luxury LTD, <br />
                    85 Great Portland street, <br />
                    First Floor, <br />
                    London, W1W 7LT
                    </div>
                </div>


                <div> <br />
                    <br />
                    <h4 className="text-4xl uppercase">invoice</h4>
                    <br /><br />
                    <p>Invoice ref number: <span className="ml-5">{invoiceNum}</span></p>
                    <p>Invoice date: <span className="ml-5">{new Date().toDateString()}</span></p>

                    {/* On client demand we commented below code */}

                    {/* <p>Invoice amount: <span className="ml-5">£{totalWatchPrice + strapPrice} (GBP)</span></p> */}

                </div>
            </div>

            <div className="mt-10 mb-4">
                <h5 className="uppercase font-semibold">billed to</h5>
                <p>
                    {data.fullname} <br />
                    {data.address}
                </p>
            </div>

            <table className="w-full border-collapse border-t-2 border-[#a6a6a6] border-b-2 my-2 mt-10">
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
                            {currentWatch[1][1]}
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

            <div className="w-full mb-6 uppercase border-t-2 py-2 border-[#a6a6a6] font-bold">
                payment details
            </div>
            <div className="mt-2 w-full border-t-2 border-[#a6a6a6]"></div>

            <div className="w-7/12 mx-auto mt-4 font-medium bg-[#F3F3F3] p-4">
                <div className="flex items-center my-3 justify-between">
                    <p>Account Number</p>
                    <p>12345678</p>
                </div>

                <div className="flex items-center my-3 justify-between">
                    <p>Sort Code</p>
                    <p>12345678</p>
                </div>

                <div className="flex items-center my-3 justify-between">
                    <p>Beneficiary</p>
                    <p>RW Luxury LTD</p>
                </div>

                <div className="uppercase !font-bold mt-6 text-center w-full">
                    pay by bank transfer
                </div>
            </div>

            <hr className="border-b-2 border-black w-full my-5" />

            <p className="mt-4 uppercase">notes</p>

            <p className="mt-4">
                Included: Original Rolex: Warranty Card, Warranty Booklet, Swing Tag, 5 Year Tiempo Warranty Card
                <br /> <br />
                RW Luxury is an independent company. Personalization & customizations are private commissions and not authorized or endorsed by the original manufacturers. Customized & personalized watches void any original manufactures warranty. All custom warranties are the sole responsibility of RW Luxury
            </p>

            <div className="flex items-center justify-center w-full h-max">
                <div className="flex mt-20 w-full h-96 items-center">
                    <div className="relative w-96 h-full">
                        <img src={currentWatch?.[0]?.[0]} alt="" className="w-96 absolute left-0 top-0 object-contain" />
                        <img src={currentWatch?.[1]?.[0]} alt="" className="w-44 absolute left-[25.5%] top-[21%] object-contain" />
                        <img src={currentWatch?.[2]?.[0]} alt="" className="w-[200px] absolute left-[23%] top-[18.2%] object-contain" />
                    </div>

                    {extraStrapSelected?.map((v, i) => (
                        <div className="flex items-center h-full" key={i}>
                            <div className="text-8xl -mt-20">+</div>
                            <img src={v?.[0]} className='w-96 mr-10 object-contain' />
                        </div>
                    ))}
                </div>



            </div>
        </div>

    )
}