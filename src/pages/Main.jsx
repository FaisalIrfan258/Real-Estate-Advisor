import React from "react";
import { useNavigate } from "react-router-dom"; 
import Header from "./Header"; 
import Sidebar from "./Sidebar"; 
import DashboardContent from "./DashboardView";
// import DashboardView from "./DashboardView.jsx";

const Dashboard = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      {/* <Header />  */}
      {/* <div style={{ display: "flex" }}>
        <Sidebar />  */}
        <div style={{ flex: 1 }}>
            <DashboardContent/>      
        </div>
      {/* </div> */}
    </div>
  );
};

export default Dashboard;










 