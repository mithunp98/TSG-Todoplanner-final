import React, { useState } from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';

import './sidebar.css';

const Sidebar = (props: any) => {
  const handleLogout = () => {
    sessionStorage.clear();
  };

  return (
    <div className="sidebar">
      <CDBSidebar
        textColor=""
        backgroundColor=""
        className=""
        breakpoint={0}
        toggled={true}
        minWidth=""
        maxWidth=""
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars" id="barcolor"/>}
                           className="headernavbar">Settings</CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/home" activeClassName="activeClicked" {...props}>
              <CDBSidebarMenuItem icon="home" className="barcolor">Home</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/addtask" activeClassName="activeClicked" {...props}>
              <CDBSidebarMenuItem icon="list" className="barcolor">Add Task</CDBSidebarMenuItem>
            </NavLink>

    <NavLink exact to="/login" activeClassName="activeClicked" {...props} id="logoutbuttonmenu" onClick={handleLogout}>
              <CDBSidebarMenuItem icon="user" className="barcolor">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
