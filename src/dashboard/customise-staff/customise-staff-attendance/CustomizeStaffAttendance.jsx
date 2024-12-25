import React, {useState} from "react";
import CustomStaffTable from "./customStaffTable/CustomStaffTable";
import "./customiseStaffAttendance.scss";
import UserOne from "../../../assets/img/user1.png";
import Subheader from "../../../layout/Subheader/Subheader.react";
import HistoryTable from "./historyTable/HistoryTable";
import { Pagination } from "react-bootstrap";

function CustomiseStaffAttendance() {
  const ordersData = [
    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      status: "Declined",
    },
    {
        staffImage: UserOne,
        staffId: "MBS_123456",
        staffName: "Rohan Talpadhi",
        status: "Declined",
      },
      {
        staffImage: UserOne,
        staffId: "MBS_123456",
        staffName: "Rohan Talpadhi",
        status: "Declined",
      },
      {
        staffImage: UserOne,
        staffId: "MBS_123456",
        staffName: "Rohan Talpadhi",
        status: "Declined",
      },
      {
        staffImage: UserOne,
        staffId: "MBS_123456",
        staffName: "Rohan Talpadhi",
        status: "Declined",
      },
      {
        staffImage: UserOne,
        staffId: "MBS_123456",
        staffName: "Rohan Talpadhi",
        status: "Declined",
      },
      {
        staffImage: UserOne,
        staffId: "MBS_123456",
        staffName: "Rohan Talpadhi",
        status: "Declined",
      },

  ];

  const historyData = [
    {
        staffImage: UserOne,
        staffId: "MBS_123456",
        staffName: "Rohan Talpadhi",
        designation: "Instructor",
        attendanceStatus: "present",
        inStatus: '01:06',
        outStatus: '03.06',
        absentStatus: '10 August 2024 11.37AM',
        leaveAccepted: '',
        reason: '',
    },

    {
        staffImage: UserOne,
        staffId: "MBS_123456",
        staffName: "Rohan Talpadhi",
        designation: "Instructor",
        attendanceStatus: "absent",
        absentStatus: '10 August 2024 11.37AM',
        leaveAccepted: 'Accepted',
        reason: 'ill',
    },

    {
        staffImage: UserOne,
        staffId: "MBS_123456",
        staffName: "Rohan Talpadhi",
        designation: "Instructor",
        attendanceStatus: "On Leave",
        leaveStatus: '10 August 2024 11.37AM',
        leaveAccepted: '',
        reason: '',
    },
  ]

  const [outClick, setOutClick] = useState(false);
  const [inClick, setInClick] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);

  const handleInClick = () => {
    setOutClick(true)
    setInClick(false)
  }

  const handleOutClick = () => {
    setInClick(true)
    setOutClick(false)
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the indices for slicing the ordersData
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ordersData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(ordersData.length / itemsPerPage);
  return (
    <div className="custom-staff-id pt-2 pt-2 pb-5">
      <div className="container">
        <div className="staff-top d-flex align-items-center justify-content-between">
            <h4 className="text-dark">Add Attendance</h4>
            <button type="button" onClick={() => {setShowAttendance(true)}}>Add Attendance</button>
        </div>
        {showAttendance && <button type="button" className="back" onClick={() => {setShowAttendance(false)}}>Back</button>}
        

        {showAttendance == true ? (
          <>
          <CustomStaffTable
            tableTitle="View all ID"
            orders={currentItems}
            totalNumber={true}
            inClick={inClick}
            outClick={outClick}
            handleInClick={() => {handleInClick()}}
            handleOutClick={() => {handleOutClick()}}
            totalNumberTitle={`Total Number of ${ordersData?.length}`}
          />
          {ordersData.length > 5 && (
            <Pagination>
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
          )}
        </>
        )
        :
        <Subheader
            itemOneTitle="RF ID"
            itemTwoTitle="Manual Attendance"
            showCenterItem = {false}
            showRightItem = {false}
            customNavClass="ml-auto staff-sub"
            itemOneData={
            <>
              <HistoryTable
                tableTitle="View all ID"
                orders={historyData}
                totalNumber={true}
                totalNumberTitle={`Total Number of ${historyData?.length}`}
              />
              {historyData.length > 5 && (
                <Pagination>
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
              )}
              
            </>
          }
          itemTwoData={
            <>
              <HistoryTable
                tableTitle="View all ID"
                orders={historyData}
                totalNumber={true}
                totalNumberTitle={`Total Number of ${historyData?.length}`}
              />
              {historyData.length > 5 && (
                <Pagination>
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
              )}
              
            </>
          }
        />
        }
      </div>
    </div>
  );
}

export default CustomiseStaffAttendance;