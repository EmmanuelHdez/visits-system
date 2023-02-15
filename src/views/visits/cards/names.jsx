import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from "react";



const EditInput = () => {
    
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <>
       
            <label className="relative cursor-pointer flex-1">
                <input
                    disabled={isDisabled}
                    type="text"
                    placeholder="Input"
                    className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] transition duration-200 disabled:placeholder-gray-400 disabled:bg-slate-50 disabled:text-gray-400"
                />
            </label>
            <div className="flex justify-center items-center cursor-pointer space-x-1">
                <span className="text-gray-400 opacity-50" onClick={() => setIsDisabled(!isDisabled)}>
                    { isDisabled ?  
                        <EditIcon className="w-[18px] h-[18px]"/> 
                        : 
                        <CheckBoxIcon className="w-[18px] h-[18px]"/> 
                    }                                            
                </span>
                <span className="text-[#5E62FF]">
                    <DeleteIcon className="w-[18px] h-[18px]" />
                </span>
            </div>
        </>        
    )
}


export function CardNames() {


    

    return (
        <div className="bg-white shadow rounded-xl flex-1 w-full flex flex-col overflow-hidden">
            <div className="flex p-2 justify-between pl-4">
                <p className="text-[15px] text font-semibold my-auto text-gray-700">
                    {" "}
                    Names info
                </p>
                <p className="bg-[#FEF8EF] rounded-xl p-2 leading-[0.8rem]">
                    <span className="text-orange-400">
                        <HelpOutlineIcon className="w-4" />
                    </span>
                    <span className="text-xs text-orange-400"> Editar/eliminar</span>
                </p>
            </div>

            <div className="flex flex-col flex-1 overflow-hidden">
                <div className="flex-1 flex overflow-hidden">
                    <ul className="w-full h-full  overflow-y-scroll flex flex-col space-y-2 px-2 py-2">
                        {Array(2).fill(0).map((e, i) => {
                            return (
                                <li className="flex items-center space-x-1" key={i}>
                                    <EditInput/>
                                </li>                                
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}