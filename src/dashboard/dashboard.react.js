import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../layout/header/header.react";
import Subheader from "../layout/Subheader/Subheader.react";
import Sidebar from "../layout/Sidebar/Sidebar.react";
import Footer from "../layout/Footer/Footer.react";

import Production from "./Production/Production.react";
import Networking from "./Networking/Networking.react";
import Servererror from "./Servererror/Servererror.react";
import Notfound from "./Notfound/Notfound.react";
import CreateCategory from "./category/createCategory/CreateCategory";
import IDplans from "./masterId/idPlans/Idplans";
import ManageId from "./masterId/manageId/ManageId";
import MasterRequest from "./masterId/masterRequest/MasterRequest";
import AllPlan from "./customise-all-plan/AllPlan";
import CustomiseStaffAttendance from "./customise-staff/customise-staff-attendance/CustomizeStaffAttendance";
import CustomViewStaff from "./customise-staff/custom-view-staff/CustomViewStaff";
import CustomViewStaffDetail from "./customise-staff/custom-view-staff/custom-staff-detail/CustomViewStaffDetail";
import CreateNewStaff from "./customise-staff/custom-view-staff/create-new-staff/CreateNewStaff";
import Profile from "./masterId/profile/Profile";
import MasterReapply from "./masterId/masterRequestSecond/MasterReApply";
import IndividualRequest from "./masterId/individualRequest/IndividualRequest";
import UserRequestAboveSixteen from "./masterId/masterRequest/UserRequestAboveSixteen";
import MasterIdVerificationRequest from "./masterId/masterRequest/MasterIdRequestVerification";
import "./dashboard.css";
import ReApplyProfile from "./masterId/profile/ReApplyProfile";
import BusinessRequest from "./masterId/businessRequest/BusinessRequest";
import ViewUser from "./masterId/users/viewUser/ViewUser";
import ViewBusiness from "./masterId/business/viewBusiness/ViewBusiness";
import CreateUser from "./masterId/users/createUser/CreateUser";
import MasterIdReRequest from "./masterId/masterRequest/MasterIdReRequest";
import MasterProfile from "./masterId/profile/MasterProfile";
import UserProfileDetails from "./masterId/users/viewUser/userTable/UserProfileDetails";

const Dashboard = () => {
  useEffect(() => {
    const dom = document.querySelector("body");
    if (window.innerWidth <= 992) {
      dom.classList.remove("sidemenu-open");
    } else {
      dom.classList.add("sidemenu-open");
    }
  }, []);

  return (
    <div>
      {/* Sidebar starts */}
      <Sidebar />
      {/* Sidebar ends */}

      {/* Wrapper starts */}
      <div className="wrapper">
        <div className="content shadow-sm" style={{ paddingBottom: "58px" }}>
          <div className="container-fluid header-container">
            {/* Header starts */}
            <Header />
            {/* Header ends */}

            {/* Subheader can be included if needed */}
            {/* <Subheader /> */}
          </div>

          {/* Routes setup */}
          <Routes>
            <Route path="/" element={<Production />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/servererror" element={<Servererror />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route path="/create-category" element={<CreateCategory />} />
            <Route path="/id-plans" element={<IDplans />} />
            <Route path="/manage-id" element={<ManageId />} />
            <Route path="/master-request" element={<MasterRequest />} />
            <Route path="/master-profile" element={<MasterProfile />} />
            <Route path="/user-profile-details" element={<UserProfileDetails />} />
            <Route
              path="/new-user-details"
              element={<UserRequestAboveSixteen />}
            />
            <Route
              path="/master-id-verification-request"
              element={<MasterIdVerificationRequest />}
            />
            <Route path="master-profile" element={<MasterProfile />} />
            <Route
              path="/master-id-re-verification-request"
              element={<MasterIdReRequest />}
            />
            <Route path="/all-plan" element={<AllPlan />} />
            <Route
              path="/staff-attendance"
              element={<CustomiseStaffAttendance />}
            />
            <Route path="/view-staff" element={<CustomViewStaff />} />
            <Route
              path="/view-staff-detail"
              element={<CustomViewStaffDetail />}
            />
            <Route path="/create-staff" element={<CreateNewStaff />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/re-apply" element={<MasterReapply />} />
            <Route path="/reapply-profile" element={<ReApplyProfile />} />
            <Route path="/individual-request" element={<IndividualRequest />} />
            <Route path="/business-request" element={<BusinessRequest />} />
            <Route path="/view-user" element={<ViewUser />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/view-business" element={<ViewBusiness />} />
            {/* Fallback route for undefined paths */}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
        {/* Footer starts */}
        <Footer />
        {/* Footer ends */}
      </div>
      {/* Wrapper ends */}
    </div>
  );
};

export default Dashboard;
