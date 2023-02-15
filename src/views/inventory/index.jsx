import { Box, Typography } from "@mui/material";
import { Heading } from "../../components/Heading";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { mockDataTeam } from "../../data/sampleData";



export default function InventoryView () {

    


    return (
        <div className="m-[20px]">
            <div className="flex justify-between align-middle">
                <Heading title="MANAGE INVENTORY" subtitle="Manage the inventory!" icon={<ImportantDevicesIcon className="w-[45px] h-[45px]"/>}/>
            </div>


        </div>
    )
}