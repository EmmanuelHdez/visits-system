import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CategoryIcon from '@mui/icons-material/Category';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import logoApp from '../../assets/logoApp-stock.webp';
import hideBtn from '../../assets/control.png';
import { Typography } from "@mui/material";
import { NavLink, Link } from 'react-router-dom';
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    useProSidebar,
    menuClasses,
    MenuItemStyles,
  } from 'react-pro-sidebar';
  




const rgbaConverter = (hex, alpha) =>  {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;

}


function SideMenu () {

    const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar(); 
    const [selected, setSelected] = useState("Dashboard");


    const menuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: '400'
        },
        icon: {
            color: '#ffffff',
            [`&.${menuClasses.disabled}`]: {
                color: '#9fb6cf',
            },
        },
        SubMenuExpandIcon: {
            color: '#ffffff',
        },

        button: {
            [`&.${menuClasses.disabled}`]: {
              color: '#9fb6cf',
            },
            '&:hover': {
              backgroundColor: rgbaConverter('#38bdf8', 1),
              color: '#ffffff',
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),

    }


    
    return (
        <div className="flex h-full">
            <Sidebar
                breakPoint="lg"
                backgroundColor={rgbaConverter('#1F9EE4', 1)}
                rootStyles={{
                    color: '#ffffff',
                }}
                height="100%"
            >
                <div className="flex flex-col h-full">
                    <div className={`${collapsed ? '0px' : 'mt-[15px]'} mb-[27px]`}>
                        <div className="flex">
                            <img src={logoApp} className={`cursor-pointer duration-500 w-[150px] mx-auto 
                                ${collapsed && "rotate-[360deg]"}
                            `}/>
                        </div>                        
                    </div>
                    

                    <div className='flex justify-self-end m-auto mb-5'>
                        <img src={hideBtn} className={`align-middle top-[25%] cursor-pointer relative duration-300 ${collapsed && "rotate-180"}`}
                        onClick={() => collapseSidebar()}
                        />
                    </div>


                    <div className="flex-1 mb-[32px]">


                        <Menu menuItemStyles={menuItemStyles} className="my-[15px]">
                            <MenuItem icon={<HomeIcon />} component={<Link to="/"/>}>
                                Dashboard                                
                            </MenuItem>
                        </Menu>


                        {/* Inventory Section */}

                        <div className={`py-0 px-[24px] mb-[8px]  
                            ${collapsed ? "mt-0" : "mt-[30px]"}
                        `}>
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                style={{ opacity: collapsed ? 0 : 1, letterSpacing: '0.5px' }}
                            >
                                Inventory
                            </Typography>
                        </div>

                        <Menu menuItemStyles={menuItemStyles}>
                            <MenuItem icon={<PlaylistAddCircleIcon />} component={<Link to="/add-inventory" />}>
                                Add New Item
                            </MenuItem>                            
                            <MenuItem icon={<ImportantDevicesIcon />} component={<Link to="/inventory" />}>
                                Manage Inventory
                            </MenuItem>
                        </Menu>

                        {/* Groups of Inventory */}

                        <div className={`py-0 px-[24px] mb-[8px]  
                            ${collapsed ? "mt-0" : "mt-[30px]"}
                        `}>
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                style={{ opacity: collapsed ? 0 : 1, letterSpacing: '0.5px' }}
                            >
                                Groups
                            </Typography>
                        </div>

                        <Menu menuItemStyles={menuItemStyles}>
                            <MenuItem icon={<CategoryIcon />} component={<Link to="/inventory-categories" />}>
                                Categories                            
                            </MenuItem>                            
                            <MenuItem icon={<AddHomeWorkIcon />} component={<Link to="/work-areas" />}>
                                Work Areas
                            </MenuItem>
                        </Menu>


                        {/* Groups of Inventory */}

                        <div className={`py-0 px-[24px] mb-[8px]  
                            ${collapsed ? "mt-0" : "mt-[30px]"}
                        `}>
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                style={{ opacity: collapsed ? 0 : 1, letterSpacing: '0.5px' }}
                            >
                                Profiles
                            </Typography>
                        </div>

                        <Menu menuItemStyles={menuItemStyles}>
                            <MenuItem icon={<GroupAddIcon />} component={<Link to="/visits" />}>
                                Manage Visits                            
                            </MenuItem>                            
                            <MenuItem icon={<ManageAccountsIcon />} component={<Link to="/visits-list" />}>
                                All Visits
                            </MenuItem>
                        </Menu>


                    </div>                    

                </div>


            </Sidebar>
        </div>
    )
}

export default SideMenu;