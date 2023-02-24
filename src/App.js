import { CssBaseline } from '@mui/material';
import Topbar from './views/global/Topbar';
import SideMenu from './views/global/Menu';
// import Dashboard from './views/dashboard';
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Dashboard } from './views/dashboard';
import InventoryView from './views/inventory';
//import { Visits } from './views/visits';
//import { ListVisits } from './views/visits/detailed/listVisits';
import { VisitsIndex } from './views/visits/index-visits';





function App() {
  return (
    <>
      <CssBaseline/>
      <div className="body">

          <ProSidebarProvider>
            <SideMenu/>
          </ProSidebarProvider>

          <main className='content flex flex-col pb-4'>
              <Topbar/>

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory" element={<InventoryView />} />
                

                {/*<Route path="/visits-list" element={<ListVisits />} />*/}

                <Route path="/visits" element={<VisitsIndex />} />
              </Routes>

          </main>
      </div>
    </>
  );
}

export default App;
