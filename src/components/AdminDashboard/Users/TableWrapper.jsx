/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

const TableWrapper = ({ children }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1)
    }, [])

    return (
        <div style={{ opacity }} className="h-full transition-all ease-in-out duration-500 overflow-x-auto">{children}</div>
    )
}

export default TableWrapper