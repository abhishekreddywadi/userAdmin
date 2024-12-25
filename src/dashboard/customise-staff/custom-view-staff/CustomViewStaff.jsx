import React, {useState} from "react";
import CustomViewTable from "./customViewTable/CustomViewTable";
import "./customViewStaff.scss";
import UserOne from "../../../assets/img/user1.png";
import Subheader from "../../../layout/Subheader/Subheader.react";
import { Pagination } from "react-bootstrap";

function CustomViewStaff() {
  const ordersData = [
    {
      orderId: "ID0001",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Declined",
      staffImage: UserOne,
      staffName: "Sonya Wilson",
      staffRole: "Aquaguard Manager",
      enrollStatus: "ACTIVE",
      department: 'Design Team'
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "ACTIVE",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Aquaguard Manager",
      enrollStatus: "DECLINED",
      department: 'Developing Team'
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "In-review",
      staffImage: UserOne,
      staffName: "Syam Prashad",
      staffRole: "Aquaguard Manager",
      enrollStatus: "ACTIVE",
      department: 'UI/UX Team'
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Sonya Wilson",
      staffRole: "Aquaguard Manager",
      enrollStatus: "ACTIVE",
      department: 'Backend Team'
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "ACTIVE",
      department: 'Developing Team'
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "ACTIVE",
      department: 'Design Team'
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "ACTIVE",
      department: 'UI/UX Team'
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "ACTIVE",
      department: 'Backend Team'
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "DECLINED",
      department: 'Backend Team'
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "ACTIVE",
      department: 'Backend Team'
    },
  ];

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
    <div className="manage-id custom-view-staff pt-2 pt-2 pb-5">
      <div className="container">
        <Subheader
          itemOneTitle="All Staff"
          itemTwoTitle="Active Staff"
          itemThreeTitle="Deactive Staff"
          showRightItem={false}
          itemOneData={
            <>
              <CustomViewTable
                tableTitle="View all Staff"
                orders={currentItems}
                totalNumber={true}
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
          }
          itemTwoData={
            <>
              <CustomViewTable
                tableTitle="View all Staff"
                orders={currentItems}
                totalNumber={true}
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
          }
          itemThreeData={
            <>
              <CustomViewTable
                tableTitle="View all Staff"
                orders={currentItems}
                totalNumber={true}
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
          }
        />
      </div>
    </div>
  );
}

export default CustomViewStaff;