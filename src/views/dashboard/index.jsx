import { Heading } from "../../components/Heading"
import HomeIcon from '@mui/icons-material/Home';



export function Dashboard() { 
  return (
    <div className="flex justify-between align-middle">
        <Heading title="WELCOME TO YOUR DASHBOARD" subtitle="Manage all the application trough your dashboard!" icon={<HomeIcon className="w-[35px] h-[35px]" />} />
    </div>
  )
}
    





  



