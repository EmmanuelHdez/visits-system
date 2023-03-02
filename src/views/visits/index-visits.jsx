import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddIcon from '@mui/icons-material/Add';
import { VisitsForm } from './Form';
import {VisitsTable}  from './List';
import visitsData from "../../data/visitsData";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { useState, useEffect } from "react";







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


{/*     ********************************
    ****Parent Component**
    ******************************** 

*/}

export function Visits() {
  
  const [isComponentForm, setIsComponentForm] = useState(true);

  return (
    <div className='flex-1 flex flex-col pb-4'>
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

      {isComponentForm ? <VisitsData/> : <ListVisits/>}
    </div>
  )
}







{/* 
    ********************************
    ****Pagina de Agendar Visitas**
    ******************************** 

*/}



export function VisitsData() {


    return (
        <>
            {/* HEADING VISITS */}


            <div className="flex justify-between align-middle">
                <Heading title="MANAGE VISITS" subtitle="Manage all the booked visits!" icon={<PermContactCalendarIcon className="w-[35px] h-[35px]" />} />
            </div>
            

            <div className="flex flex-col bg-indigo-50 mx-[2rem] rounded-xl flex-1 border border-red-500">

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

                <VisitsForm/>

                

            </div>

        </>
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

          {console.log(visitsData, "perro")}
          
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
                  <VisitsTable dataTable={visits} rowsPerPage={5}/>
              </div>
          </div>


      </>
  )
}




