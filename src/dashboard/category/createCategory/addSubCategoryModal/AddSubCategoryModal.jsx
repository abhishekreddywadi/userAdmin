import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './addSubCategoryModal.scss';

const AddSubCategoryModal = ({ show, handleClose, categoryType, parentBusiness, category, department }) => {
  const [subCategoryName, setSubCategoryName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    const formData = {
      parentBusiness,
      category,
      department,
      subCategoryName,
      image: selectedFile
    };
    console.log('Form Data:', formData);
    // Add your API call here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="sub-category-modal">
      <Modal.Header closeButton>
        <Modal.Title>Add {categoryType} Sub Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="form-row">
            <Form.Group>
              <Form.Label>Parent Business</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>

          <div className="form-row">
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>
          </div>

          <div className="form-row">
            <Form.Group>
              <Form.Label>Department</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
          </div>

          <div className="form-row">
            <Form.Group>
              <Form.Label>Enter Sub Category Name</Form.Label>
              <Form.Control
                type="text"
                value={subCategoryName}
                onChange={(e) => setSubCategoryName(e.target.value)}
                placeholder="Enter sub category name"
              />
            </Form.Group>
          </div>

          <div className="form-row">
            <div className="image-upload-container">
              {previewImage && (
                <div className="preview-image">
                  <img src={previewImage} alt="Preview" />
                </div>
              )}
              <Form.Group>
                <Form.Label className="upload-label">
                  <div className="upload-placeholder">
                    {!previewImage && <span>Choose File</span>}
                  </div>
                  <Form.Control
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="file-input"
                  />
                </Form.Label>
              </Form.Group>
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddSubCategoryModal;
