import { ChartSiderBar } from "./ChartPage";
import { ChartNavPage } from "./Chart_NavPage";
import { My_Chartpage } from "./Chart_line";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


export function App() {
  return (
    <>
      <div class="wrapper" style={{
        display: "flex",
        height: "100vh"
      }}>
      
      <div class="sidebar">
      
      <ChartSiderBar/>
      </div>
      <div class="content">
      <ChartNavPage/>
      {/* <My_Chartpage/> */}
      <BrowserRouter >
      <Routes>
        <Route path='view' exact element={<My_Chartpage/>} />
      </Routes>
      </BrowserRouter>
      </div>
   </div>
      
    </>
  );
}

