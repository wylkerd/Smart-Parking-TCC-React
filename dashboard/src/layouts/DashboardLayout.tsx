import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderStats from '../components/Headers/HeaderStats';
import FooterAdmin from '../components/Footers/FooterAdmin';

// views
import Tables from '../views/Tables';

import Dashboard from '../views/Dashboard';

export default function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
