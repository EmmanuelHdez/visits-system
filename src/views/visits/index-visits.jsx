import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

/* Listado de Visitas  */

import RecentActorsIcon from '@mui/icons-material/RecentActors';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect } from "react";
import visitsData from "../../data/visitsData";






/* Encabezado */

export function Heading ({title, subtitle, icon}) {
    return (
        <div className="mb-7 px-8">
            <div className="flex justify-between align-middle">
                <div className="shadow-inner rounded-full w-[50px] h-[50px] my-auto"
                    style={{boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)"}}
                >
                    <div className="text-[#1F9EE4] p-[7px] m-auto">
                        {icon}
                    </div>
                </div>
                <div className="ml-5">
                    <div className="text-[20px] text font-semibold my-auto text-gray-500">{title}</div>
                    <div className="text-md font-bold text-[#5E62FF] my-auto">{subtitle}</div>
                </div>
            </div>
        </div>
    )
}


{/* 
    ********************************
    ****Parent Component**
    ******************************** 

*/}

export function VisitsIndex() {
  
  const [isComponentForm, setIsComponentForm] = useState(true);

  return (
    <>
      <div className='flex items-center justify-center pt-6  space-x-4 px-8'>
        <div className={`${isComponentForm ? 'bg-[#5E62FF]' : 'bg-white'} border-2 border-[#5E62FF] rounded-xl shadow-md cursor-pointer`} onClick={() => { setIsComponentForm(true)}}>
            <div className="flex items-center justify-around px-4 py-2">                  
                <div className="text-center">
                    <span className={`${isComponentForm ? 'text-white' : 'text-[#5E62FF]'} text-[14px]`}>Register Visit</span>
                </div>
            </div>
        </div>
        <div className={`${!isComponentForm ? 'bg-[#5E62FF]' : 'bg-white'} border-2 border-[#5E62FF] rounded-xl shadow-md cursor-pointer`} onClick={() => { setIsComponentForm(false)}}>
          <div className="flex items-center justify-around px-4 py-2">                  
              <div className="text-center">
                  <span className={`${!isComponentForm ? 'text-white' : 'text-[#5E62FF]'} text-[14px]`}>See Visits List</span>
              </div>
          </div>
        </div>
      </div>

      {isComponentForm ? <Visits/> : <ListVisits/>}
    </>
  )
}







{/* 
    ********************************
    ****Pagina de Agendar Visitas**
    ******************************** 

*/}



export function Visits() {
    return (
        <>
            {/* HEADING VISITS */}


            <div className="flex justify-between align-middle">
                <Heading title="MANAGE VISITS" subtitle="Manage all the booked visits!" icon={<PermContactCalendarIcon className="w-[35px] h-[35px]" />} />
            </div>
            

            <div className="flex flex-col bg-indigo-50 mx-[2rem] rounded-xl flex-1">

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


export function FormVisits() {

    /* Initial State of Date Input  */
    const [value, setValue] = useState({ $d: new Date() });
  
  
    /* State of array list elements */
    const [nameList, setNameList] = useState([]);
  
    const addNameList = (item) => {
      setNameList([...nameList, item])
    }
  
    const editNameList = (index, newValue) => {
      const nList = [...nameList]
      nList[index].name = newValue
      setNameList(nList)
    }
  
    const deleteNameList = (index) => {
      const nList = [...nameList];
      nList.splice(index, 1);
      setNameList(nList);
    }
  
    console.log(nameList, "nameList")
  
    
  
  
    /* Vehicles Form */
  
    const [vehicleList, setVehicleList] = useState([]);
  
    const addVehicleList = (item) => {
      setVehicleList([...vehicleList, item])
    }
  
    const editVehicleList = (index, newValue) => {
      const nList = [...vehicleList]
      nList[index].name = newValue
      setVehicleList(nList)
    }
  
    const deleteVehicleList = (index) => {
      const nList = [...vehicleList];
      nList.splice(index, 1);
      setVehicleList(nList);
   }
  
   console.log(vehicleList, "vehicleList");
  
    const renderDateInput = ({ inputRef, inputProps, InputProps }) => {
      return (
        <>
          <label className="relative cursor-pointer w-[85%]">
            <input
              ref={inputRef}
              {...inputProps}
              className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] placeholder-gray-300 placeholder-opacity-0 transition duration-200"
            />
            <span className="text-[11px] text-gray-400 text-opacity-80 bg-white absolute left-3 top-[10px] transition duration-200 input-text">
              Fecha
            </span>
          </label>
  
          <div
            className="flex justify-center items-center mx-auto cursor-pointer"
            onClick={() => {
              InputProps.endAdornment.props.children.props.onClick();
            }}
          >
            <span className="text-[#5E62FF]">
              <EventRepeatIcon className="w-[20px] h-[20px]" />
            </span>
          </div>
        </>
      );
    };
  
    return (
      <div className="my-4 flex px-5 space-x-5 flex-1">
        <div className="w-[60%] justify-between">
          <div className="bg-white shadow rounded-xl h-full">
            <div className="relative overflow-x-auto">
              <div className="p-4 ml-2">
                <div className="mb-4">
                  <div className="text-[18px] text font-semibold my-auto text-gray-700 mb-1">
                    Set customs info
                  </div>
                  <div className="text-xs font-bold text-gray-400 my-auto">
                    Fill in required customs info
                  </div>
                </div>
  
                <div className="flex space-x-4">
                  {/* Names and vehicles */}
  
                  <div className="flex-1">
                    <div className="mt-2">
                      <div className="text-xs font-bold text-gray-400 mb-2">
                        Nombres visitas <span className="text-red-500">*</span>
                      </div>
  
                      <div className="flex items-center space-x-2">
  
                        {/* Name */}
  
                        <NameComponent addNameList={addNameList} />
  
                      </div>
  
                    </div>
  
                    <div className="mt-4">
                      <div className="text-xs font-bold text-gray-400 mb-2">
                        Información vehiculos{" "}
                        <span className="text-red-500">*</span>
                      </div>
  
                      <div className="flex items-center space-x-2">
                        
                        {/* Vehicle */}
                        
                        <VehicleComponent addVehicleList={addVehicleList} />
                      </div>
                    </div>
                  </div>
  
                  {/* Single Info  */}
  
                  <div className="flex-col flex-1">
                    <div className="mt-2">
                      <div className="text-xs font-bold text-gray-400 mb-2">
                        Motivo visita <span className="text-red-500">*</span>
                      </div>
  
                      <div className="flex items-center">
                        <label className="relative cursor-pointer w-full">
                          <input
                            type="text"
                            placeholder="Input"
                            className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                          />
                          <span className="text-[11px] text-gray-400 text-opacity-80 bg-white absolute left-3 top-[10px] transition duration-200 input-text">
                            Motivo
                          </span>
                        </label>
                      </div>
                    </div>
  
                    <div className="mt-4">
                      <div className="text-xs font-bold text-gray-400 mb-2">
                        Fecha visita <span className="text-red-500">*</span>
                      </div>
  
                      <div className="flex items-center">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            label="Date Visit"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            renderInput={renderDateInput}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="mt-4">
                  <div className="text-xs font-bold text-gray-400 mb-2">
                    Organización o Institución{" "}
                    <span className="text-red-500">*</span>
                  </div>
                  <div className="flex items-center">
                    <label className="relative cursor-pointer w-full">
                      <input
                        type="text"
                        placeholder="Input"
                        className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                      />
                      <span className="text-[11px] text-gray-400 text-opacity-80 bg-white absolute left-3 top-[10px] transition duration-200 input-text">
                        Organización
                      </span>
                    </label>
                  </div>
                  <div className="mt-2">
                    <p className="text-[10px] text-gray-400">
                      Introduzca la institución proveniente e.g.{" "}
                      <span className="rounded-md p-1 bg-[#BEC0FF] text-white ml-1">
                        Ferrari
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="border-t border-gray-300 p-4">
              <div className="flex justify-end space-x-2">
                <div className="bg-[#FFFFFF] rounded-xl cursor-pointer min-w-[70px]">
                  <div className="flex items-center justify-around py-2">
                    <div className="text-center">
                      <div className="flex justify-between items-center">
                        <span className="text-gray text-xs">Cancel</span>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="bg-[#5E62FF] rounded-xl shadow cursor-pointer min-w-[70px]">
                  <div className="flex items-center justify-around py-2">
                    <div className="text-center">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-xs">Save</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Section Names & Vehicles */}
  
        <div className="flex flex-1 flex-col justify-end items-stretch space-y-2">
          <CardNames nameList={nameList} deleteNameList={deleteNameList} editNameList={editNameList} />
          <CardVehicles vehicleList={vehicleList} deleteVehicleList={deleteVehicleList} editVehicleList={editVehicleList}/>
        </div>
      </div>
    );
}

function NameComponent(props) {
    const [itemName, setItemName] = useState("");
    const [outline, setOutline] = useState(false);
  
    /* Manage the value of the onchange event */
  
    const handleInputType = (event) => {
      setItemName(event.target.value);
    }
  
    const handleAddButton = () => {
      if (itemName !== "") {
        props.addNameList({
          id: Date.now(),
          name: itemName
        })
        setItemName("")
        setOutline(false)
      } else {
        setOutline(true);
      }
  
  
    }
  
    return (
      <>
        <label className="relative cursor-pointer flex-1">
          <input
            type="text"
            placeholder="Input"
            value={itemName}
            onChange={handleInputType}
            className={`${outline ? "outlined-empty-input" : null} gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] placeholder-gray-300 placeholder-opacity-0 transition duration-200`}
          />
          <span className="text-[11px] text-gray-400 text-opacity-80 bg-white absolute left-3 top-[10px] transition duration-200 input-text">
            Nombre
          </span>
        </label>
  
        <div className="flex justify-center items-center cursor-pointer" onClick={handleAddButton}>
          <span className="text-[#5E62FF]">
            <AddCircleIcon className="w-[20px] h-[20px]" />
          </span>
        </div>
      </>
    )
  }
  
  
function VehicleComponent(props) {
    const [itemName, setItemName] = useState("");
    const [outline, setOutline] = useState(false);
  
    /* Manage the value of the onchange event */
  
    const handleInputType = (event) => {
      setItemName(event.target.value);
    }
  
    const handleAddButton = () => {
      if (itemName !== "") {
        props.addVehicleList({
          id: Date.now(),
          name: itemName
        })
        setItemName("")
        setOutline(false)
      } else {
        setOutline(true);
      }
  
  
    }
  
    return (
      <>
        <label className="relative cursor-pointer flex-1">
          <input
            type="text"
            placeholder="Input"
            value={itemName}
            onChange={handleInputType}
            className={`${outline ? "outlined-empty-input" : null} gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] placeholder-gray-300 placeholder-opacity-0 transition duration-200`}
          />
          <span className="text-[11px] text-gray-400 text-opacity-80 bg-white absolute left-3 top-[10px] transition duration-200 input-text">
            Vehículo
          </span>
        </label>
  
        <div className="flex justify-center items-center cursor-pointer" onClick={handleAddButton}>
          <span className="text-[#5E62FF]">
            <AddCircleIcon className="w-[20px] h-[20px]" />
          </span>
        </div>
      </>
    )
}

export function CardNames(props) {

    const [editIndex, setEditIndex] = useState(-1);
    const [editName, setEditName] = useState("");

    const handleChangeInput = (event) => {
        setEditName(event.target.value);
    }

    const handleEditBtn = (index) => { 
        setEditIndex(index);
        setEditName(props.nameList[index].name)
    }

    const handleSaveBtn = (index) => { 
        props.editNameList(index, editName);
        setEditIndex(-1);
    }
        

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

                        {props.nameList.map((item, index) => (
                            <li className="flex items-center space-x-1" key={index}>

                                {editIndex === index ? (
                                    <>
                                        <label className="relative cursor-pointer flex-1">
                                            <input
                                                value={editName}
                                                onChange={handleChangeInput}                                            
                                                type="text"
                                                placeholder="Input"
                                                className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] transition duration-200 disabled:placeholder-gray-400 disabled:bg-slate-50 disabled:text-gray-400"
                                            />
                                        </label>

                                        <div className="flex justify-center items-center cursor-pointer space-x-1">
                                            <span className="text-gray-400 opacity-50" onClick={() => handleSaveBtn(index)}>
                                                <CheckBoxIcon className="w-[18px] h-[18px]"/>
                                            </span>
                                            <span className="text-[#5E62FF] cursor-not-allowed	">
                                                <DeleteIcon className="w-[18px] h-[18px]" />
                                            </span>
                                        </div>
                                    </>
                                    
                                ) : (

                                    <>
                                        <label className="relative cursor-pointer flex-1">
                                            <input
                                                value={item.name}
                                                disabled                                            
                                                type="text"
                                                placeholder="Input"
                                                className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] transition duration-200 disabled:placeholder-gray-400 disabled:bg-slate-50 disabled:text-gray-400"
                                            />
                                        </label>

                                        <div className="flex justify-center items-center cursor-pointer space-x-1">
                                            <span className="text-gray-400 opacity-50" onClick={() => handleEditBtn(index)}>
                                                <EditIcon className="w-[18px] h-[18px]"/>
                                            </span>
                                            <span className="text-[#5E62FF]" onClick={() => props.deleteNameList(index)}>
                                                <DeleteIcon className="w-[18px] h-[18px]" />
                                            </span>
                                        </div>
                                    </>

                                    
                                )}
                            </li>
                        ))}

                       


                    </ul>
                </div>
            </div>
        </div>
    )
}


export function CardVehicles(props) {

    const [editIndex, setEditIndex] = useState(-1);
    const [editName, setEditName] = useState("");

    const handleChangeInput = (event) => {
        setEditName(event.target.value);
    }

    const handleEditBtn = (index) => { 
        setEditIndex(index);
        setEditName(props.vehicleList[index].name)
    }

    const handleSaveBtn = (index) => { 
        props.editVehicleList(index, editName);
        setEditIndex(-1);
    }
        

    return (
        <div className="bg-white shadow rounded-xl flex-1 w-full flex flex-col overflow-hidden">
            <div className="flex p-2 justify-between pl-4">
                <p className="text-[15px] text font-semibold my-auto text-gray-700">
                    {" "}
                    Vehicles info
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

                        {props.vehicleList.map((item, index) => (
                            <li className="flex items-center space-x-1" key={index}>

                                {editIndex === index ? (
                                    <>
                                        <label className="relative cursor-pointer flex-1">
                                            <input
                                                value={editName}
                                                onChange={handleChangeInput}                                            
                                                type="text"
                                                placeholder="Input"
                                                className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] transition duration-200 disabled:placeholder-gray-400 disabled:bg-slate-50 disabled:text-gray-400"
                                            />
                                        </label>

                                        <div className="flex justify-center items-center cursor-pointer space-x-1">
                                            <span className="text-gray-400 opacity-50" onClick={() => handleSaveBtn(index)}>
                                                <CheckBoxIcon className="w-[18px] h-[18px]"/>
                                            </span>
                                            <span className="text-[#5E62FF] cursor-not-allowed	">
                                                <DeleteIcon className="w-[18px] h-[18px]" />
                                            </span>
                                        </div>
                                    </>
                                    
                                ) : (

                                    <>
                                        <label className="relative cursor-pointer flex-1">
                                            <input
                                                value={item.name}
                                                disabled                                            
                                                type="text"
                                                placeholder="Input"
                                                className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] transition duration-200 disabled:placeholder-gray-400 disabled:bg-slate-50 disabled:text-gray-400"
                                            />
                                        </label>

                                        <div className="flex justify-center items-center cursor-pointer space-x-1">
                                            <span className="text-gray-400 opacity-50" onClick={() => handleEditBtn(index)}>
                                                <EditIcon className="w-[18px] h-[18px]"/>
                                            </span>
                                            <span className="text-[#5E62FF]" onClick={() => props.deleteVehicleList(index)}>
                                                <DeleteIcon className="w-[18px] h-[18px]" />
                                            </span>
                                        </div>
                                    </>

                                    
                                )}
                            </li>
                        ))}

                       


                    </ul>
                </div>
            </div>
        </div>
    )
}



{/* 
    ********************************
    ****Pagina de Listar Visitas**
    ******************************** 

*/}

export function ListVisits() {

  const [visits] = useState([...visitsData])


  return (
      <>
          
          {/* HEADING LIST VISITS */}

          <div className="flex justify-between align-middle">
              <Heading title="VISITS LIST" subtitle="Visualize all the booked visits!" icon={<RecentActorsIcon className="w-[35px] h-[35px]" />} />
          </div>

          <div className="flex flex-col bg-indigo-50 mx-[2rem] rounded-xl flex-1 pb-2">

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

              <div className="px-5 mt-2">
                <TableView dataTable={visits} rowsPerPage={5}/>
              </div>

              {/* Pagination */}

              


          </div>


      </>
  )
}

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

                          

const TableView = ({dataTable, rowsPerPage}) => {
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


