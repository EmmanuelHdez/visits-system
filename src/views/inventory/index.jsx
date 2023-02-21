import { Heading } from "../../components/Heading";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';




export default function InventoryView () {

    


    return (
        <div className="m-[20px]">
            <div className="flex justify-between align-middle">
                <Heading title="MANAGE INVENTORY" subtitle="Manage the inventory!" icon={<ImportantDevicesIcon className="w-[45px] h-[45px]"/>}/>
            </div>
        </div>
    )
}