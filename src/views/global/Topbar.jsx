import { IconButton } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";

import {useLocation,useNavigate} from "react-router-dom"

function Topbar () {
    const state = useLocation();
    const naviagate= useNavigate();
    const nav = useLocation();

    console.log(nav); 
    return (
        <div className="flex justify-between m-0 px-[6rem] bg-white shadow-lg relative items-center py-5">
            {/* Searchbar and logo */}
            
            <div className="flex justify-between space-x-10">
                <div className="flex text-lg font-bold my-auto">
                    Dashboard logo
                </div>
                <div className="flex items-center border-2 rounded-xl">
                    <input type="text" placeholder="Search..." className="ml-4 outline-none w-full" />
                    <IconButton type="button">
                        <SearchIcon />
                    </IconButton>
                </div>
            </div>


            {/* Icons Control and Profile */}

            <div className="flex space-x-7">

                <div className="flex space-x-3">
                    <IconButton
                    onClick={()=>{naviagate("/headSets")}}
                    >                
                        <DarkModeOutlinedIcon />                
                    </IconButton>
                    <IconButton
                     onClick={()=>window.history.pushState(null,"","/computer")}
                    >
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>                
                </div>

                <div className="cursor-pointer rounded-lg my-auto">  
                    <div className="flex">                    
                        <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" className="w-[32px] rounded-full h-[32px] border-none" />                        
                        <div className="flex justify-between md:inline-flex items-center ml-2">
                            <span className="text-gray-600 text-[15px]">Ann Lee</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[0.6rem] h-[0.6rem] fill-current ml-2" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>          


        </div>
    )
}

export default Topbar;
