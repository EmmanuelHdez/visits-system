import { Heading } from "../../../components/Heading"
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



export function ListVisits() {
    return (
        <>
            {/* HEADING LIST VISITS */}

            <div className="flex justify-between align-middle">
                <Heading title="MANAGE VISITS" subtitle="Manage all the booked visits!" icon={<PermContactCalendarIcon className="w-[45px] h-[45px]" />} />
            </div>

            <div className="flex flex-col bg-indigo-50 mx-[2rem] rounded-xl mt-8 flex-1">

                {/* Toolbar buttons */}
                <div className="flex justify-between relative items-center px-7 py-4 border-b-2 border-gray-300">
                    <div className="">
                        <h2 className="text-xl text-[#2B92EC] font-semibold"> Create Visits</h2>
                    </div>


                    <div className="flex justify-between space-x-6">

                        <div className="bg-white border-2 border-[#2B92EC] rounded-xl shadow-lg cursor-pointer">
                            <div className="flex items-center justify-around px-4 py-2">
                                <div className="text-center">
                                    <span className="text-[#2B92EC] text-[14px]">Export visits to Excel</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#2B92EC] rounded-xl shadow-lg cursor-pointer">
                            <div className="flex items-center justify-around px-4 py-2">
                                <div className="text-center">
                                    <div className="flex justify-between md:inline-flex items-center">

                                        <span className="text-white mr-2"><AddIcon className="w-5" /></span>
                                        <span className="text-white text-[14px]">New Visit</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Form Visits */}

                <div className="px-5 my-5">
                    <table className="border-spacing-x-0 border-spacing-y-[15px] border-separate w-full max-w-[100%] mb-[1rem] text-sm">
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

                            {Array(5    ).fill(0).map((e, i) => {
                                return (
                                    <tr className="shadow-lg rounded-lg bg-white align-middle text-[11px] text-center text-gray-400">
                                        <td className="custm-radius text-gray-500 whitespace-nowrap py-5 px-2">
                                            David Gonzales Cabrera
                                        </td>
                                        <td className="py-5 px-2">
                                            Visita laboratorio
                                        </td>
                                        <td className="py-5 px-2">
                                            Audi R8 Coupé V10 2023
                                        </td>
                                        <td className="py-5 px-2">
                                            02/16/2023 04:19 PM
                                        </td>
                                        <td className="py-5 px-2">
                                            Google Inc.
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
                </div>
                
                {/* Pagination */}

                <div class="flex justify-start px-4">
                    <nav>
                        <ul class="flex list-style-none">
                            <li class="page-item disabled">
                                <a  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                                    href="#" tabindex="-1" aria-disabled="true">
                                        Previous
                                </a>
                                
                            </li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="#">1</a></li>
                            <li class="page-item active"><a
                                class="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                                href="#">2</a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="#">3</a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="#">Next</a></li>
                        </ul>
                        
                    </nav>
                </div>


            </div>


        </>
    )
}