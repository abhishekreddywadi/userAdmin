import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./createCategory.scss";
import UserOne from "../../../assets/img/user1.png";
import UserTwo from "../../../assets/img/user2.png";
import UserThree from "../../../assets/img/user3.png";
import ShieldImg from '../../../assets/img/shield.png';
import Form from "react-bootstrap/Form";

import AddNewModal from "./addNewModal/AddNewModal";
import AddDepartmentModal from "./addDepartmentModal/AddDepartmentModal";
import BusinessSubCatModal from "./businessSubCatModal/BusinessSubCatModal";
import AddClassModal from "./addClassModal/AddClassModal";
import AddCourseCategory from "./addCourseCategory/AddCourseCategory";

const initialFeatures = [
  { id: '1', name: 'Verify user.', limit: 500, enabled: false, checked: false },
  { id: '2', name: 'Create user', limit: 500, enabled: true, checked: true },
  { id: '3', name: 'RFID', limit: 500, enabled: true, checked: true },
  { id: '4', name: 'Verify business.', limit: 500, enabled: false, checked: false },
  { id: '5', name: 'Verify master ID.', limit: 500, enabled: true, checked: true },
  { id: '6', name: 'Create Business account.', limit: 500, enabled: false, checked: false },
  { id: '7', name: 'Block unblock user', limit: 500, enabled: true, checked: true },
  { id: '8', name: 'Create business.', limit: 500, enabled: false, checked: false },
  { id: '9', name: 'Manage staff.', limit: 500, enabled: false, checked: false },
];

const partners = [
  { name: "Rohan Yadav", role: "CEO", id: 'partner-1' },
  { name: "John Doe", role: "CTO", id: 'partner-2' },
  { name: "Jane Smith", role: "COO", id: 'partner-3' },
  { name: "Alice Johnson", role: "CFO", id: 'partner-4' },
  { name: "Bob Brown", role: "CMO", id: 'partner-5' },
];

const categoryTableData = [
  {
    icon: UserOne,
    name: "Dipatement",
    createdBy: "Sunil Yadav",
    createdId: "ID MUB12345",
    date: "25/12/2024",
  },
  {
    icon: UserTwo,
    name: "Business",
    createdBy: "Sunil Yadav",
    createdId: "ID MUB12345",
    date: "25/12/2024",
  },
  {
    icon: UserThree,
    name: "Event",
    createdBy: "Sunil Yadav",
    createdId: "ID MUB12345",
    date: "25/12/2024",
  },
  {
    icon: UserThree,
    name: "Staff",
    createdBy: "Sunil Yadav",
    createdId: "ID MUB12345",
    date: "25/12/2024",
  },
  {
    icon: UserThree,
    name: "Home Society",
    createdBy: "Sunil Yadav",
    createdId: "ID MUB12345",
    date: "25/12/2024",
  },
  {
    icon: UserThree,
    name: "Course",
    createdBy: "Sunil Yadav",
    createdId: "ID MUB12345",
    date: "25/12/2024",
  },
  {
    icon: UserThree,
    name: "home society",
    createdBy: "Sunil Yadav",
    createdId: "ID MUB12345",
    date: "25/12/2024",
  },
];

const categoryDepartmentTableData = [
  {
    icon: UserOne,
    category: "Information Technology",
    subNo: 35,
    department: "IT Department",
    parentBusiness: "Individual",
  },
  {
    icon: UserTwo,
    category: "Information Technology",
    subNo: 41,
    department: "IT Department",
    parentBusiness: "Individual",
  },
  {
    icon: UserThree,
    category: "E-commerce",
    subNo: 43,
    department: "IT Department",
    parentBusiness: "Business",
  },
];
const categoryDepartmentTableDataForHome = [
  {
    icon: UserOne,
    category: "Society ",
    subNo: 35,
    department: "IT Department",
    parentBusiness: "Individual",
  },
  {
    icon: UserTwo,
    category: "Apartment",
    subNo: 41,
    department: "IT Department",
    parentBusiness: "Individual",
  },
  {
    icon: UserThree,
    category: "Villas",
    subNo: 43,
    department: "IT Department",
    parentBusiness: "Business",
  },
];
const CreateCategory = () => {
  const [stepOneActive, setStepOneActive] = useState(true);
  const [stepTwoActive, setStepTwoActive] = useState(false);
  const [stepThreeActive, setStepThreeActive] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false)
  const [addModalImageSrc, setAddModalImageSrc] = useState(null)
  const [showDepartmentModal, setShowDepartmentModal] = useState(false)
  const [showBusinessCatModal, setShowBusinessCatModal] = useState(false)
  const [showAddClassModal, setShowAddClassModal] = useState(false)
  const [departmentModalImageSrc, setDepartmentModalImageSrc] = useState(null)
  const [businessCatModalImageSrc, setBusinessCatModalImageSrc] = useState(null)
  const [addModalClassImageSrc, setAddModalClassImageSrc] = useState(null)
  const [departmentFormImageSrc, setDepartmentFormImageSrc] = useState(null)
  const [selectedData, setSelectedData] = useState('');
  const [checkedStates, setCheckedStates] = useState(new Array(partners.length).fill(false));
  const [categoryData, setCategoryData] = useState(categoryTableData);
  const [departmentData, setDepartmentData] = useState(categoryDepartmentTableData);
  const [features, setFeatures] = useState(initialFeatures);


  
  const [showAddCourseModal, setShowAddCourseModal] = useState(false)
  const [addModalCourseImageSrc, setAddModalCourseImageSrc] = useState(null)

  const [showAddStaffModal, setShowAddStaffModal] = useState(false)
  const [addModalStaffImageSrc, setAddModalStaffImageSrc] = useState(null)

  
  const [showAddEventModal, setShowAddEventModal] = useState(false)
  const [addModalEventImageSrc, setAddModalEventImageSrc] = useState(null)
  
  const handleToggle = (index) => {
    const updatedCheckedStates = [...checkedStates];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setCheckedStates(updatedCheckedStates);
  };

  const handleStepOne = (e) => {
    e.preventDefault();
    setStepOneActive(true)
    setStepTwoActive(false)
    setStepThreeActive(false)
  }

  const handleStepTwo = (e, data) => {
    e.preventDefault();
    setStepTwoActive(true);
    setStepOneActive(false)
    setStepThreeActive(false)
    setSelectedData(data);
  }

  const handleStepThree = (e) => {
    e.preventDefault();
    setStepThreeActive(true);
    setStepTwoActive(false)
    setStepOneActive(false)
  }

  const handleAddModalShow = () => setShowAddModal(true);
  const handleAddModalHide = () => setShowAddModal(false);
  
  const handleDepartmentModalShow = () => setShowDepartmentModal(true);
  const handleDepartmentModalHide = () => setShowDepartmentModal(false);
  
  const handleBusinessCatModalShow = () => setShowBusinessCatModal(true);
  const handleBusinessCatModalHide = () => setShowBusinessCatModal(false);
  
  const handleAddClassModalShow = () => setShowAddClassModal(true);
  const handleAddClassModalHide = () => setShowAddClassModal(false);
  
  const handleAddCourseModalShow = () => setShowAddCourseModal(true);
  const handleAddCourseModalHide = () => setShowAddCourseModal(false);
  
  const handleAddStaffModalShow = () => setShowAddStaffModal(true);
  const handleAddStaffModalHide = () => setShowAddStaffModal(false);
  
  const handleAddEventModalShow = () => setShowAddEventModal(true);
  const handleAddEventModalHide = () => setShowAddEventModal(false);

  const handleAddModalFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAddModalImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDepartmentModalFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDepartmentModalImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDepartmentFormFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDepartmentFormImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBusinessCatModalFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBusinessCatModalImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddClassModalFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBusinessCatModalImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleAddCourseModalFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAddModalCourseImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleAddStaffModalFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAddModalStaffImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleAddEventModalFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAddModalEventImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }



  const handleInitialToggle = (index) => {
    const newFeatures = [...features];
    newFeatures[index].enabled = !newFeatures[index].enabled;
    setFeatures(newFeatures);
  };

  const handleInitialCheck = (index) => {
    const newFeatures = [...features];
    newFeatures[index].checked = !newFeatures[index].checked;
    setFeatures(newFeatures);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedFeatures = Array.from(features);
    const [removed] = reorderedFeatures.splice(result.source.index, 1);
    reorderedFeatures.splice(result.destination.index, 0, removed);

    setFeatures(reorderedFeatures);
  };

  // console.log("stepOneActive", stepOneActive)
  // console.log("stepTwoActive", stepTwoActive)
  // console.log("stepThreeActive", stepThreeActive)

  console.log("selectedData", selectedData)
  // console.log("showAddCourseModal", showAddCourseModal)

  return (
    <div className="create-category py-4">
      <div className="container" style={{ minHeight: "calc(100vh - 200px)" }}>
        <div className="row">
          <div className="col-12 submenu">
              <div className="create-category-container">
                <ul className="category-steps d-flex align-items-center">
                  <li><button type="button" className={`${stepOneActive && 'active'}`}>Step 1</button></li>
                  <li><button type="button" className={`${stepTwoActive && 'active'}`}>Step 2</button></li>
                  <li><button type="button" className={`${stepThreeActive && 'active'}`}>Step 3</button></li>
                </ul>

                {
                  stepOneActive ? (
                    <>
                    <div className="add-category d-md-flex align-items-center justify-content-between text-center pt-4">
                      <h3 className="mb-3 mb-md-0 text-dark font-weight-bold h4">
                        All Category Type 
                      </h3>
                      <button type="button" className="creation" onClick={handleAddModalShow}>
                        Add New
                      </button>
                    </div>
                    <div className="crete-category-filter  mt-4 mt-md-5 ">
                      <div className="entries mb-2">
                        Show
                        <select className="mx-2">
                          <option value="">5</option>
                          <option value="">10</option>
                          <option value="">15</option>
                          <option value="">20</option>
                        </select>
                        entries
                      </div>
                      <div className="filters mb-4">
                        <div className="row">
                          <div className="col-md-4 d-none d-md-flex"></div>
                          <div
                            className="col-12 col-md-4 d-flex align-items-center"
                            style={{ gap: 15 }}
                          >
                            <div className="input-container d-flex flex-column">
                              <label htmlFor="" className="d-flex">
                                Filter
                              </label>
                              <select name="" id="">
                                <option value="">Individual</option>
                              </select>
                              
                            </div>
                            <div className="input-container d-flex flex-column">
                              <label htmlFor="" className="d-flex"></label>
                              <select name="" id=""></select>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="input-container d-flex flex-column">
                              <label htmlFor="">Search</label>
                              <input type="search" name="" id="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="category-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Sno.</th>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Created by</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Add</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categoryData?.map((data, i) => {
                            return (
                              <tr>
                                <td>{i + 1}</td>
                                <td>
                                  <img src={data.icon} alt="icon" />
                                </td>
                                <td>{data.name}</td>
                                <td>
                                  <p>{data.createdBy}</p>
                                  <p>{data.createdId}</p>
                                </td>
                                <td>{data.date}</td>
                                <td>
                                  <p>
                                    <Form.Check // prettier-ignore
                                      type="switch"
                                      id={`custom-switch${i + 1}`}
                                    />
                                    <span>Active</span>
                                  </p>
                                  <p>
                                    <button
                                      type="button"
                                      className="action-button"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-pencil-square"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path
                                          fill-rule="evenodd"
                                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                        />
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      className="action-button"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                      </svg>
                                    </button>
                                  </p>
                                </td>
                                <td>
                                  <button type="button" className="creation" onClick={(e) => handleStepTwo(e, data.name)}>
                                    Create
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    </>
                  ) :
                  stepTwoActive ? (
                    selectedData == "Dipatement" ? (
                      <>
                        <div className="add-category d-md-flex align-items-center justify-content-between text-center pt-4">
                          <h3 className="mb-3 mb-md-0 text-dark font-weight-bold h4">
                            All Department Category
                          </h3>
                          <button type="button" className="creation" onClick={handleDepartmentModalShow}>
                            Add Category
                          </button>
                        </div>
                        <div className="crete-category-filter  mt-4 mt-md-5 ">
                          <div className="entries mb-2">
                            Show
                            <select className="mx-2">
                              <option value="">5</option>
                              <option value="">10</option>
                              <option value="">15</option>
                              <option value="">20</option>
                            </select>
                            entries
                          </div>
                          <div className="filters mb-4">
                            <div className="row">
                              <div className="col-md-4 d-md-flex">
                                <button className="back-btn" onClick={(e) => handleStepOne(e, selectedData)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                  </svg>
                                  Back
                                </button>
                              </div>
                              <div
                                className="col-12 col-md-4 d-flex align-items-center"
                                style={{ gap: 15 }}
                              >
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex">
                                    Filter
                                  </label>
                                  <select name="" id="">
                                    <option value="">Individual</option>
                                  </select>
                                </div>
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex"></label>
                                  <select name="" id=""></select>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="">Search</label>
                                  <input type="search" name="" id="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="category-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Sno.</th>
                                <th>Icon</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Care Of</th>
                                <th>Parent Business</th>
                                <th>Status</th>
                                <th>Add</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categoryDepartmentTableData?.map((data, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                      <img src={data.icon} alt="icon" />
                                    </td>
                                    <td>{data.category}</td>
                                    <td>{data.subNo}</td>
                                    <td>{data.department}</td>
                                    <td>{data.parentBusiness}</td>
                                    <td>
                                      <p>
                                        <Form.Check // prettier-ignore
                                          type="switch"
                                          id={`custom-switch${i + 1}`}
                                        />
                                        <span>Active</span>
                                      </p>
                                      <p>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                              fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-trash"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                          </svg>
                                        </button>
                                      </p>
                                    </td>
                                    <td>
                                      <button type="button" className="creation" onClick={(e) => handleStepThree(e, selectedData)}>
                                        Assign
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )
                    : selectedData == "Business" ? (
                      <>
                        <div className="add-category d-md-flex align-items-center justify-content-between text-center pt-4">
                          <h3 className="mb-3 mb-md-0 text-dark font-weight-bold h4">
                            All Department Category
                          </h3>
                          <button type="button" className="creation" onClick={handleDepartmentModalShow}>
                            Add Category
                          </button>
                        </div>
                        <div className="crete-category-filter  mt-4 mt-md-5 ">
                          <div className="entries mb-2">
                            Show
                            <select className="mx-2">
                              <option value="">5</option>
                              <option value="">10</option>
                              <option value="">15</option>
                              <option value="">20</option>
                            </select>
                            entries
                          </div>
                          <div className="filters mb-4">
                            <div className="row">
                              <div className="col-md-4 d-md-flex">
                                <button className="back-btn" onClick={(e) => handleStepOne(e, selectedData)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                  </svg>
                                  Back
                                </button>
                              </div>
                              <div
                                className="col-12 col-md-4 d-flex align-items-center"
                                style={{ gap: 15 }}
                              >
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex">
                                    Filter
                                  </label>
                                  <select name="" id="">
                                    <option value="">Individual</option>
                                  </select>
                                </div>
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex"></label>
                                  <select name="" id=""></select>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="">Search</label>
                                  <input type="search" name="" id="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="category-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Sno.</th>
                                <th>Icon</th>
                                <th>Category</th>
                                <th>Sub No.</th>
                                <th>Department</th>
                                <th>Parent Business</th>
                                <th>Status</th>
                                <th>Add</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categoryDepartmentTableData?.map((data, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                      <img src={data.icon} alt="icon" />
                                    </td>
                                    <td>{data.category}</td>
                                    <td>{data.subNo}</td>
                                    <td>{data.department}</td>
                                    <td>{data.parentBusiness}</td>
                                    <td>
                                      <p>
                                        <Form.Check // prettier-ignore
                                          type="switch"
                                          id={`custom-switch${i + 1}`}
                                        />
                                        <span>Active</span>
                                      </p>
                                      <p>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                              fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-trash"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                          </svg>
                                        </button>
                                      </p>
                                    </td>
                                    <td>
                                      <button type="button" className="creation" onClick={(e) => handleStepThree(e, selectedData)}>
                                        Sub Category
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )
                    : selectedData == "Event" ? (
                      <>
                        <div className="add-category d-md-flex align-items-center justify-content-between text-center pt-4">
                          <h3 className="mb-3 mb-md-0 text-dark font-weight-bold h4">
                            All Event Category
                          </h3>
                          <button type="button" className="creation" onClick={handleAddEventModalShow}>
                            Add Category
                          </button>
                        </div>
                        <div className="crete-category-filter  mt-4 mt-md-5 ">
                          <div className="entries mb-2">
                            Show
                            <select className="mx-2">
                              <option value="">5</option>
                              <option value="">10</option>
                              <option value="">15</option>
                              <option value="">20</option>
                            </select>
                            entries
                          </div>
                          <div className="filters mb-4">
                            <div className="row">
                              <div className="col-md-4 d-md-flex">
                                <button className="back-btn" onClick={(e) => handleStepOne(e, selectedData)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                  </svg>
                                  Back
                                </button>
                              </div>
                              <div
                                className="col-12 col-md-4 d-flex align-items-center"
                                style={{ gap: 15 }}
                              >
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex">
                                    Filter
                                  </label>
                                  <select name="" id="">
                                    <option value="">Individual</option>
                                  </select>
                                </div>
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex"></label>
                                  <select name="" id=""></select>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="">Search</label>
                                  <input type="search" name="" id="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="category-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Sno.</th>
                                <th>Icon</th>
                                <th>Category</th>
                                <th>Sub No.</th>
                                <th>Department</th>
                                <th>Parent Business</th>
                                <th>Status</th>
                                <th>Add</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categoryDepartmentTableData?.map((data, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                      <img src={data.icon} alt="icon" />
                                    </td>
                                    <td>{data.category}</td>
                                    <td>{data.subNo}</td>
                                    <td>{data.department}</td>
                                    <td>{data.parentBusiness}</td>
                                    <td>
                                      <p>
                                        <Form.Check // prettier-ignore
                                          type="switch"
                                          id={`custom-switch${i + 1}`}
                                        />
                                        <span>Active</span>
                                      </p>
                                      <p>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                              fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-trash"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                          </svg>
                                        </button>
                                      </p>
                                    </td>
                                    <td>
                                      <button type="button" className="creation" onClick={(e) => handleStepThree(e, selectedData)}>
                                        Sub Category
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )
                    : selectedData == "Home Society" ? (
                      <>
                        <div className="add-category d-md-flex align-items-center justify-content-between text-center pt-4">
                          <h3 className="mb-3 mb-md-0 text-dark font-weight-bold h4">
                            All Home Society Category
                          </h3>
                          <button type="button" className="creation" onClick={handleAddEventModalShow}>
                            Add Category
                          </button>
                        </div>
                        <div className="crete-category-filter  mt-4 mt-md-5 ">
                          <div className="entries mb-2">
                            Show
                            <select className="mx-2">
                              <option value="">5</option>
                              <option value="">10</option>
                              <option value="">15</option>
                              <option value="">20</option>
                            </select>
                            entries
                          </div>
                          <div className="filters mb-4">
                            <div className="row">
                              <div className="col-md-4 d-md-flex">
                                <button className="back-btn" onClick={(e) => handleStepOne(e, selectedData)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                  </svg>
                                  Back
                                </button>
                              </div>
                              <div
                                className="col-12 col-md-4 d-flex align-items-center"
                                style={{ gap: 15 }}
                              >
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex">
                                    Filter
                                  </label>
                                  <select name="" id="">
                                    <option value="">Individual</option>
                                  </select>
                                </div>
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex"></label>
                                  <select name="" id=""></select>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="">Search</label>
                                  <input type="search" name="" id="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="category-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Sno.</th>
                                <th>Icon</th>
                                <th>Category</th>
                                <th>Sub No.</th>
                                <th>Department</th>
                                <th>Parent Business</th>
                                <th>Status</th>
                                <th>Add</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categoryDepartmentTableDataForHome?.map((data, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                      <img src={data.icon} alt="icon" />
                                    </td>
                                    <td>{data.category}</td>
                                    <td>{data.subNo}</td>
                                    <td>{data.department}</td>
                                    <td>{data.parentBusiness}</td>
                                    <td>
                                      <p>
                                        <Form.Check // prettier-ignore
                                          type="switch"
                                          id={`custom-switch${i + 1}`}
                                        />
                                        <span>Active</span>
                                      </p>
                                      <p>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                              fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-trash"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                          </svg>
                                        </button>
                                      </p>
                                    </td>
                                    <td>
                                      <button type="button" className="creation" onClick={(e) => handleStepThree(e, selectedData)}>
                                        Sub Category
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )

                    : selectedData == "Staff" ? (
                      <>
                        <div className="add-category d-md-flex align-items-center justify-content-between text-center pt-4">
                          <h3 className="mb-3 mb-md-0 text-dark font-weight-bold h4">
                            All Staff Category
                          </h3>
                          <button type="button" className="creation" onClick={handleAddStaffModalShow}>
                            Add Category
                          </button>
                        </div>
                        <div className="crete-category-filter  mt-4 mt-md-5 ">
                          <div className="entries mb-2">
                            Show
                            <select className="mx-2">
                              <option value="">5</option>
                              <option value="">10</option>
                              <option value="">15</option>
                              <option value="">20</option>
                            </select>
                            entries
                          </div>
                          <div className="filters mb-4">
                            <div className="row">
                              <div className="col-md-4 d-md-flex">
                                <button className="back-btn" onClick={(e) => handleStepOne(e, selectedData)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                  </svg>
                                  Back
                                </button>
                              </div>
                              <div
                                className="col-12 col-md-4 d-flex align-items-center"
                                style={{ gap: 15 }}
                              >
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex">
                                    Filter
                                  </label>
                                  <select name="" id="">
                                    <option value="">Individual</option>
                                  </select>
                                </div>
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex"></label>
                                  <select name="" id=""></select>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="">Search</label>
                                  <input type="search" name="" id="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="category-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Sno.</th>
                                <th>Icon</th>
                                <th>Category</th>
                                <th>Sub No.</th>
                                <th>Department</th>
                                <th>Parent Business</th>
                                <th>Status</th>
                                <th>Add</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categoryDepartmentTableData?.map((data, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                      <img src={data.icon} alt="icon" />
                                    </td>
                                    <td>{data.category}</td>
                                    <td>{data.subNo}</td>
                                    <td>{data.department}</td>
                                    <td>{data.parentBusiness}</td>
                                    <td>
                                      <p>
                                        <Form.Check // prettier-ignore
                                          type="switch"
                                          id={`custom-switch${i + 1}`}
                                        />
                                        <span>Active</span>
                                      </p>
                                      <p>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                              fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-trash"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                          </svg>
                                        </button>
                                      </p>
                                    </td>
                                    <td>
                                      <button type="button" className="creation" onClick={(e) => handleStepThree(e, selectedData)}>
                                        Sub Category
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )

                    : selectedData == "Class" ? (
                      <>
                        <div className="add-category d-md-flex align-items-center justify-content-between text-center pt-4">
                          <h3 className="mb-3 mb-md-0 text-dark font-weight-bold h4">
                            All Class Category
                          </h3>
                          <button type="button" className="creation" onClick={handleAddClassModalShow}>
                            Add Category
                          </button>
                        </div>
                        <div className="crete-category-filter  mt-4 mt-md-5 ">
                          <div className="entries mb-2">
                            Show
                            <select className="mx-2">
                              <option value="">5</option>
                              <option value="">10</option>
                              <option value="">15</option>
                              <option value="">20</option>
                            </select>
                            entries
                          </div>
                          <div className="filters mb-4">
                            <div className="row">
                              <div className="col-md-4 d-md-flex">
                                <button className="back-btn" onClick={(e) => handleStepOne(e, selectedData)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                  </svg>
                                  Back
                                </button>
                              </div>
                              <div
                                className="col-12 col-md-4 d-flex align-items-center"
                                style={{ gap: 15 }}
                              >
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex">
                                    Filter
                                  </label>
                                  <select name="" id="">
                                    <option value="">Individual</option>
                                  </select>
                                </div>
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex"></label>
                                  <select name="" id=""></select>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="">Search</label>
                                  <input type="search" name="" id="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="category-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Sno.</th>
                                <th>Icon</th>
                                <th>Category</th>
                                <th>Sub No.</th>
                                <th>Department</th>
                                <th>Parent Business</th>
                                <th>Status</th>
                                <th>Add</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categoryDepartmentTableData?.map((data, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                      <img src={data.icon} alt="icon" />
                                    </td>
                                    <td>{data.category}</td>
                                    <td>{data.subNo}</td>
                                    <td>{data.department}</td>
                                    <td>{data.parentBusiness}</td>
                                    <td>
                                      <p>
                                        <Form.Check // prettier-ignore
                                          type="switch"
                                          id={`custom-switch${i + 1}`}
                                        />
                                        <span>Active</span>
                                      </p>
                                      <p>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                              fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-trash"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                          </svg>
                                        </button>
                                      </p>
                                    </td>
                                    <td>
                                      <button type="button" className="creation" onClick={(e) => handleStepThree(e, selectedData)}>
                                        Sub Category
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )

                    :  (
                      <>
                        <div className="add-category d-md-flex align-items-center justify-content-between text-center pt-4">
                          <h3 className="mb-3 mb-md-0 text-dark font-weight-bold h4">
                            All Course Category
                          </h3>
                          <button type="button" className="creation" onClick={handleAddCourseModalShow}>
                            Add Category
                          </button>
                        </div>
                        <div className="crete-category-filter  mt-4 mt-md-5 ">
                          <div className="entries mb-2">
                            Show
                            <select className="mx-2">
                              <option value="">5</option>
                              <option value="">10</option>
                              <option value="">15</option>
                              <option value="">20</option>
                            </select>
                            entries
                          </div>
                          <div className="filters mb-4">
                            <div className="row">
                              <div className="col-md-4 d-md-flex">
                                <button className="back-btn" onClick={(e) => handleStepOne(e, selectedData)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                  </svg>
                                  Back
                                </button>
                              </div>
                              <div
                                className="col-12 col-md-4 d-flex align-items-center"
                                style={{ gap: 15 }}
                              >
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex">
                                    Filter
                                  </label>
                                  <select name="" id="">
                                    <option value="">Individual</option>
                                  </select>
                                </div>
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex"></label>
                                  <select name="" id=""></select>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="">Search</label>
                                  <input type="search" name="" id="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="category-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Sno.</th>
                                <th>Icon</th>
                                <th>Category</th>
                                <th>Sub No.</th>
                                <th>Department</th>
                                <th>Parent Business</th>
                                <th>Status</th>
                                <th>Add</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categoryDepartmentTableData?.map((data, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                      <img src={data.icon} alt="icon" />
                                    </td>
                                    <td>{data.category}</td>
                                    <td>{data.subNo}</td>
                                    <td>{data.department}</td>
                                    <td>{data.parentBusiness}</td>
                                    <td>
                                      <p>
                                        <Form.Check // prettier-ignore
                                          type="switch"
                                          id={`custom-switch${i + 1}`}
                                        />
                                        <span>Active</span>
                                      </p>
                                      <p>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                              fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-trash"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                          </svg>
                                        </button>
                                      </p>
                                    </td>
                                    <td>
                                      <button type="button" className="creation" onClick={(e) => handleStepThree(e, selectedData)}>
                                        Sub Category
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )
                    
                  ) :
                  stepThreeActive && (
                    selectedData == "Dipatement" ? (
                      <>

                        <div className="crete-category-filter mt-4 mt-md-5 ">
                          <div className="filters mb-5">
                            <div className="row">
                              <div className="col-md-4 d-md-flex">
                                <button className="back-btn" onClick={(e) => handleStepTwo(e, selectedData)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                  </svg>
                                  Back
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="care-info-head">
                          <h3 className="mb-4 mb-md-5 text-dark font-weight-bold h4">
                            Care of Information
                          </h3>
                          <form action="">
                              <div className="row" style={{gap: '25px 0'}}>
                                  <div className="col-12 col-md-4">
                                      <div className="input-container">
                                          <label htmlFor="">Brand * (Company Name)</label>
                                          <input type="text" />
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                      <div className="input-container">
                                          <label htmlFor="">Website Name</label>
                                          <input type="text" />
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                      <div className="input-container">
                                          <label htmlFor="">Official Email</label>
                                          <input type="email" />
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                      <div className="input-container">
                                          <label htmlFor="">Phone *</label>
                                          <input type="text" />
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                      <div className="input-container">
                                          <label htmlFor="">Status</label>
                                          <input type="text" />
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                      <div className="input-container">
                                          <label htmlFor=""></label>
                                          <input type="email" />
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                      <div className="input-container">
                                          <label htmlFor="">Co individual ID</label>
                                          <div className="d-flex">
                                            <input type="number" />
                                            <button type="button">Check</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-12 col-md-4">
                                      <div className="input-container">
                                          <label htmlFor="">Brand (Company ID)</label>
                                          <div className="d-flex">
                                            <input type="number" />
                                            <button type="button">Check</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </form>

                          <div className="user-imgs col-12 col-md-6 mt-4">
                            <div className="row justify-content-between">
                              <div className="img-box">
                                <span></span>
                                <p>Rahul Yadav <img src={ShieldImg} alt="shield" /></p>
                              </div>

                              <div className="img-box">
                                <span></span>
                                <p>Master Zone <img src={ShieldImg} alt="shield" /></p>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-md-6 mt-4 p-0">
                            <div className="partners-list">
                              {partners.map((partner, index) => (
                                <div className="partners-box" key={index}>
                                  <span></span>
                                  <h6>{partner.name}</h6>
                                  <strong>{partner.role}</strong>
                                  <Form.Check
                                    type="switch"
                                    id={partner.id}
                                    checked={checkedStates[index]}
                                    onChange={() => handleToggle(index)}
                                  />
                                  <p>{checkedStates[index] ? "show" : "not"}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                        </div>

                        <div className="list-main mt-5">
                          <div className="list-left">
                            <h5 className="mb-4">Feature list Permission.</h5>
                            <div className="list-container">
                              <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="features">
                                  {(provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                      <table className="table">
                                        <thead>
                                          <tr>
                                            <th>Feature list</th>
                                            <th>Limit</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {features.map((feature, index) => (
                                            <Draggable key={feature.id} draggableId={feature.id} index={index}>
                                              {(provided) => (
                                                <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                  <td>
                                                    <div className="d-flex align-items-center">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
                                                        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                                      </svg>
                                                      <Form.Check
                                                        type="checkbox"
                                                        checked={feature.checked}
                                                        onChange={() => handleInitialCheck(index)}
                                                        className="mx-2 pe-0"
                                                      />
                                                      {feature.name}
                                                    </div>
                                                    
                                                  </td>
                                                  <td>
                                                  <div className="d-flex align-items-center">
                                                    <Form.Check
                                                      type="switch"
                                                      id={`feature-permission-${feature.id}`}
                                                      checked={feature.enabled}
                                                      onChange={() => handleInitialToggle(index)}
                                                    />
                                                    <span className="badge bg-warning text-dark ml-3">{feature.limit}</span>
                                                    </div>
                                                    
                                                  </td>
                                                </tr>
                                              )}
                                            </Draggable>
                                          ))}
                                        </tbody>
                                      </table>
                                      {provided.placeholder}
                                    </div>
                                  )}
                                </Droppable>
                              </DragDropContext>
                            </div>
                          </div>
                          <div className="list-right">
                          <h5 className="mb-4">Api list Main</h5>
                          <div className="list-container">
                            <DragDropContext onDragEnd={onDragEnd}>
                              <Droppable droppableId="features">
                                {(provided) => (
                                  <div {...provided.droppableProps} ref={provided.innerRef}>
                                    <table className="table">
                                      <thead>
                                          <tr>
                                            <th>App list</th>
                                          </tr>
                                        </thead>
                                      <tbody>
                                        {features.map((feature, index) => (
                                          <Draggable key={feature.id} draggableId={feature.id} index={index}>
                                            {(provided) => (
                                              <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <td>
                                                  <div className="d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
                                                      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                                    </svg>
                                                    <Form.Check
                                                      type="checkbox"
                                                      checked={feature.checked}
                                                      onChange={() => handleInitialCheck(index)}
                                                      className="mx-2 pe-0"
                                                    />
                                                    {feature.name}
                                                  </div>
                                                  
                                                </td>
                                              </tr>
                                            )}
                                          </Draggable>
                                        ))}
                                      </tbody>
                                    </table>
                                    {provided.placeholder}
                                  </div>
                                )}
                              </Droppable>
                            </DragDropContext>
                          </div>
                        </div>
                        </div>
                      </>
                    )
                    : (


                    <>
                        <div className="add-category d-md-flex align-items-center justify-content-between text-center pt-4">
                          <h3 className="mb-3 mb-md-0 text-dark font-weight-bold h4">
                            Sub Category
                          </h3>
                          <button type="button" className="creation" onClick={handleBusinessCatModalShow}>
                            Add Sub Category
                          </button>
                        </div>
                        <div className="crete-category-filter  mt-4 mt-md-5 ">
                          <div className="entries mb-2">
                            Show
                            <select className="mx-2">
                              <option value="">5</option>
                              <option value="">10</option>
                              <option value="">15</option>
                              <option value="">20</option>
                            </select>
                            entries
                          </div>
                          <div className="filters mb-4">
                            <div className="row">
                              <div className="col-md-4 d-md-flex">
                                <button className="back-btn" onClick={(e) => handleStepTwo(e, selectedData)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                  </svg>
                                  Back
                                </button>
                              </div>
                              <div
                                className="col-12 col-md-4 d-flex align-items-center"
                                style={{ gap: 15 }}
                              >
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex">
                                    Filter
                                  </label>
                                  <select name="" id="">
                                    <option value="">Individual</option>
                                  </select>
                                </div>
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="" className="d-flex"></label>
                                  <select name="" id=""></select>
                                </div>
                              </div>
                              <div className="col-12 col-md-4">
                                <div className="input-container d-flex flex-column">
                                  <label htmlFor="">Search</label>
                                  <input type="search" name="" id="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="category-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Sno.</th>
                                <th>Icon</th>
                                <th>Sub Category</th>
                                <th>Parent Business</th>
                                <th>Status</th>
                                <th>Add</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categoryDepartmentTableData?.map((data, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                      <img src={data.icon} alt="icon" />
                                    </td>
                                    <td>{data.category}</td>
                                    <td>{data.parentBusiness}</td>
                                    <td>
                                      <p>
                                        <Form.Check // prettier-ignore
                                          type="switch"
                                          id={`custom-switch${i + 1}`}
                                        />
                                        <span>Active</span>
                                      </p>
                                      <p>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                              fill-rule="evenodd"
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                            />
                                          </svg>
                                        </button>
                                        <button
                                          type="button"
                                          className="action-button"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-trash"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                          </svg>
                                        </button>
                                      </p>
                                    </td>
                                    <td>
                                      <button type="button" className="creation" onClick={(e) => handleStepThree(e, selectedData)}>
                                        Sub Category
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )
                  )
                }
              </div>
          </div>
        </div>
      </div>
      {showAddModal && (
        <AddNewModal showAddModal={showAddModal} handleAddModalHide={handleAddModalHide} handleAddModalFileChange={handleAddModalFileChange} addModalImageSrc={addModalImageSrc} />
      )}

      {showDepartmentModal && (
        <AddDepartmentModal showDepartmentModal={showDepartmentModal} handleDepartmentModalHide={handleDepartmentModalHide} handleDepartmentModalFileChange={handleDepartmentModalFileChange} departmentModalImageSrc={departmentModalImageSrc} business={selectedData} />
      )}

      {showBusinessCatModal && (
        <BusinessSubCatModal showBusinessCatModal={showBusinessCatModal} handleBusinessCatModalHide={handleBusinessCatModalHide} handleBusinessCatModalFileChange={handleBusinessCatModalFileChange} businessCatModalImageSrc={businessCatModalImageSrc} business={selectedData} />
      )}

      {showAddClassModal && (
        <AddClassModal showAddClassModal={showAddClassModal} handleAddClassModalHide={handleAddClassModalHide} handleAddClassModalFileChange={handleAddClassModalFileChange} addModalClassImageSrc={addModalClassImageSrc} addTitle="Add Class Category" addNameLabel="Class Category Name" departmentLabel="Department Name" />
      )}

      {showAddCourseModal && (
        <AddClassModal showAddClassModal={showAddCourseModal} handleAddClassModalHide={handleAddCourseModalHide} handleAddClassModalFileChange={handleAddCourseModalFileChange} addModalClassImageSrc={addModalCourseImageSrc} addTitle="Add Course Category" addNameLabel="Course Category Name" departmentLabel="Department Name" />
      )}

      {showAddStaffModal && (
        <AddClassModal showAddClassModal={showAddStaffModal} handleAddClassModalHide={handleAddStaffModalHide} handleAddClassModalFileChange={handleAddStaffModalFileChange} addModalClassImageSrc={addModalStaffImageSrc} addTitle="Add Staff Category" addNameLabel="Staff Category Name" departmentLabel="Department Name" />
      )}

      {showAddEventModal && (
        <AddClassModal showAddClassModal={showAddEventModal} handleAddClassModalHide={handleAddEventModalHide} handleAddClassModalFileChange={handleAddEventModalFileChange} addModalClassImageSrc={addModalEventImageSrc} addTitle="Add Event Category" addNameLabel="Event Category Name" departmentLabel="Department Name" />
      )}
    </div>
  );
};

export default CreateCategory;
