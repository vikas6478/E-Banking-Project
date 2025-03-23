import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link,Outlet } from "react-router-dom";
import "../CSS/dashboard.css"

//icons
import { BsBank } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineSendToMobile } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";

const Dashboard = () => {
  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      nav("/login");
    } else {
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    nav("/login");
  };

  return (
    <div className="dashboard-container">
  
      <div className="navbar1">
        <div>
          <img 
        src="/image/logo-banking.png" 
        alt="MyBank Logo" 
        width="100" 
        height="40" 
        className="d-inline-block align-top"
      /> </div>

        <div className="rightnav">
          <h1 className="welcomeLine">
            Welcome:{localStorage.getItem("name")}
          </h1>

          <button onClick={logout} className="btn-logout">
          Logout
        </button>
      
        </div>
        </div>

      <div className="dashboard-main">

        <div className="sidebar">
          <ul>
            
            <Link to={"accountInfo"} className="link"><li><BsBank /> Account Info</li> </Link>
            {/* <Link to={"dashhome"} className="link"><li><BsBank /> Account Info</li> </Link> */}
            <Link to={"addmoney"} className="link"><li><FaMoneyCheckAlt /> Add Money</li> </Link>
            <Link to={"statement"} className="link"><li><FaRegNewspaper/> Account Statement</li></Link>
            <Link to={"showbalance"} className="link"><li><FaMoneyBills/> Show Balance</li> </Link>
            <Link to={"withdrawmoney"} className="link"><li><MdOutlineSendToMobile/> Withdraw Money</li></Link>
            <Link to={"resetpass"} className="link"><li><RiLockPasswordLine/> Reset Password</li></Link>

          </ul>
        </div>

        <div className="dashboard-content">
        <Outlet />

        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;