import { Heading } from "../../components/Heading"
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddIcon from '@mui/icons-material/Add';
import { FormVisits } from "./form";


export function Visits() {
    return (
        <>
            {/* HEADING VISITS */}
            
            <div className="flex justify-between align-middle">
                <Heading title="MANAGE VISITS" subtitle="Manage all the booked visits!" icon={<PermContactCalendarIcon className="w-[45px] h-[45px]"/>}/>
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
                                    <span className="text-[#2B92EC] text-[14px]">See Visits</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#2B92EC] rounded-xl shadow-lg cursor-pointer">
                            <div className="flex items-center justify-around px-4 py-2">                  
                                <div className="text-center">                    
                                    <div className="flex justify-between md:inline-flex items-center">

                                        <span className="text-white mr-2"><AddIcon className="w-5"/></span>      
                                        <span className="text-white text-[14px]">New User</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                
                {/* Form Visits */}

                <FormVisits/>

            </div>

        </>
    )
}