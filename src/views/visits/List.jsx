import { Heading } from "../../components/Heading"
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState, useEffect } from "react";

import visitsData from "../../data/visitsData";
import { defaultFormat } from "moment";





const calculateRange = (dataTable, rowsPerPage) => {
    const pagination = [];
    let num = Math.ceil(dataTable.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        pagination.push(i)
    }
    return pagination;
}

const calculateElements = (dataTable, page, rowsPerPage) => {
    const elements = dataTable.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    return elements
}

const useTable = (dataTable, page, rowsPerPage) => {

    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => { 
        const range = calculateRange(dataTable, rowsPerPage);
        setTableRange([...range])

        const slice = calculateElements(dataTable, page, rowsPerPage)
        setSlice([...slice])

    }, [dataTable, page, setTableRange, setSlice]);

    return { slice, range: tableRange}

};


const TablePagination = ({range, setPage, page, slice }) => { 
    useEffect(() => {
        
        if (slice.lenght < 1 && page !== 1) {
            setPage(page - 1);
        }

    }, [slice, page, setPage])
    return (
        <div className="flex space-x-2 text-[12px]">
                <button className="flex items-center px-3 py-1 text-gray-400 bg-white rounded-lg cursor-not-allowed dark:text-gray-700">
                    Previous
                </button>
                
                {range.map((e, index) => (
                    <button 
                        key={index}
                        className={`items-center flex px-3 py-1 rounded-lg transition-colors duration-300 transform ${page === e ? "active-pagination" : 'bg-white hover:bg-[#5E62FF] hover:text-white text-gray-600'}`}
                        onClick={() => setPage(e)}
                        >
                        {e}
                    </button>
                ))}

                <button className="items-center flex px-3 py-1 rounded-lg text-gray-600 transition-colors duration-300 transform bg-white hover:bg-[#5E62FF] hover:text-white">
                    Next
                </button>

        </div>
    )
}                   

                            

export function VisitsTable({dataTable, rowsPerPage}) {
    const [page, setPage] = useState(1)
    const { slice, range } = useTable(dataTable, page, rowsPerPage)

    return (
    
        <>
    
        <table className="border-spacing-x-0 border-spacing-y-[15px] border-separate w-full max-w-[100%] mb-2 text-sm">
            <thead className="text-gray-500">
                <tr className="text-[13px]">
                    <th className="align-middle border-none">
                        Full Name
                    </th>
                    <th className="align-middle border-none">
                        Motivo Visita
                    </th>
                    <th className="align-middle border-none">
                        Vehiculo
                    </th>
                    <th className="align-middle border-none">
                        Fecha
                    </th>
                    <th className="align-middle border-none">
                        Organización
                    </th>
                    <th className="align-middle border-none">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                {slice.map((element, index) => {
                    return (
                        <tr className="shadow-lg rounded-lg bg-white align-middle text-[11px] text-center text-gray-400" key={index}>
                            <td className="custm-radius text-gray-500 whitespace-nowrap py-5 px-2">
                                {element.name}
                            </td>
                            <td className="py-5 px-2">
                                {element.reason_vis}
                            </td>
                            <td className="py-5 px-2">
                                {element.vehicle}
                            </td>
                            <td className="py-5 px-2">
                                {element.date}
                            </td>
                            <td className="py-5 px-2">
                                {element.organization}
                            </td>
                            <td className="custm-radius-last px-2 py-5">
                                <div className="flex justify-center items-center cursor-pointer space-x-[6px]">
                                    <span className="text-[#5E62FF]">
                                        <RemoveRedEyeOutlinedIcon className="w-[18px] h-[18px]" />
                                    </span>
                                    <span className="text-[#5E62FF]">
                                        <ModeEditOutlineOutlinedIcon className="w-[18px] h-[18px]" />
                                    </span>
                                    <span className="text-[#5E62FF]">
                                        <DeleteOutlineOutlinedIcon className="w-[18px] h-[18px]" />
                                    </span>
                                </div>
                            </td>
                        </tr>
                    )
                })}                
            </tbody>
        </table>

        <TablePagination range={range} slice={slice} setPage={setPage}/>

        </>


        
    )


}








