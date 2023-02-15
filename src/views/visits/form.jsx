import AddCircleIcon from "@mui/icons-material/AddCircle";

import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { CardNames } from "./cards/names";
import { CardVehicles } from "./cards/vehicles";




export function FormVisits() {
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

  const [value, setValue] = useState({
    $d: new Date(),
  });

  console.log(new Date(value?.$d).toISOString(), 11111);

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
                      <label className="relative cursor-pointer flex-1">
                        <input
                          type="text"
                          placeholder="Input"
                          className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                        />
                        <span className="text-[11px] text-gray-400 text-opacity-80 bg-white absolute left-3 top-[10px] transition duration-200 input-text">
                          Nombre
                        </span>
                      </label>

                      <div className="flex justify-center items-center cursor-pointer">
                        <span className="text-[#5E62FF]">
                          <AddCircleIcon className="w-[20px] h-[20px]" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-xs font-bold text-gray-400 mb-2">
                      Información vehiculos{" "}
                      <span className="text-red-500">*</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <label className="relative cursor-pointer flex-1">
                        <input
                          type="text"
                          placeholder="Input"
                          className="gle-input h-[35px] w-full px-3 text-[12px] text-gray-700 bg-white border-gray-400 border rounded-lg border-opacity-50 outline-none focus:border-[#2B92EC] placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                        />
                        <span className="text-[11px] text-gray-400 text-opacity-80 bg-white absolute left-3 top-[10px] transition duration-200 input-text">
                          Vehículo
                        </span>
                      </label>

                      <div className="flex justify-center items-center cursor-pointer">
                        <span className="text-[#5E62FF]">
                          <AddCircleIcon className="w-[20px] h-[20px]" />
                        </span>
                      </div>
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
            <CardNames/>        
            <CardVehicles/>
        </div>
    </div>
  );
}
