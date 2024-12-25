import React, {useState} from "react";
import ManageTable from "./manageTable/ManageTable";
import "./manageId.scss";
import UserOne from "../../../assets/img/user1.png";
import Subheader from "../../../layout/Subheader/Subheader.react";
import { Pagination } from "react-bootstrap";

function ManageId() {
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
      enrollStatus: "PENDING",
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Pending",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Aquaguard Manager",
      enrollStatus: "PENDING",
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
      enrollStatus: "PENDING",
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
      enrollStatus: "PENDING",
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
      enrollStatus: "PENDING",
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
      enrollStatus: "PENDING",
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
      enrollStatus: "PENDING",
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
      enrollStatus: "PENDING",
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
      enrollStatus: "PENDING",
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
      enrollStatus: "PENDING",
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
    <div className="manage-id pt-2 pt-2 pb-5">
      <div className="container">
        <Subheader
        itemOneTitle="Master ID"
        itemTwoTitle="Business ID"
        itemThreeTitle="User ID"
          itemOneData={
            <>
              <ManageTable
                tableTitle="View all ID"
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
              <ManageTable
                tableTitle="View all ID"
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
              <ManageTable
                tableTitle="View all ID"
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

export default ManageId;