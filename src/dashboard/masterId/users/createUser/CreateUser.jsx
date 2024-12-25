import React, { useState, useRef } from "react";
import "./createUser.scss";
import UserImg from "../../../../assets/img/user1.png";
import Webcam from "react-webcam";

function CreateUser() {
  const [checkPhoneNum, setCheckPhoneNum] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  const [imageSrc, setImageSrc] = useState(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const webcamRef = useRef(null);

  const handleOpenWebcam = () => {
    setIsWebcamOpen(true);
  };

  const handleCloseWebcam = () => {
    setIsWebcamOpen(false);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    handleCloseWebcam();
  };

  const handleUpload = () => {
    if (!imageSrc) return;

    // Convert the data URL to a Blob
    const byteString = atob(imageSrc.split(",")[1]);
    const mimeString = imageSrc.split(",")[0].split(":")[1].split(";")[0];
    const buffer = new ArrayBuffer(byteString.length);
    const data = new Uint8Array(buffer);

    for (let i = 0; i < byteString.length; i++) {
      data[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([buffer], { type: mimeString });

    // Create a form data object and append the blob
    const formData = new FormData();
    formData.append("file", blob, "webcam-image.jpg");

    // Upload the image using fetch or any other method
    // fetch('/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Upload success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Upload error:', error);
    //   });
  };

  const handleCheckPhoneNum = () => {
    setCheckPhoneNum(true);
  };

  const handleCheckEmail = () => {
    setCheckEmail(true);
  };
  return (
    <div className="create-user pt-5 pt-2 pb-5">
      <div className="container">
        <form action="">
          <div className="row" style={{ gap: "25px 0" }}>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className="user-img mr-3">
                        {imageSrc && <img src={imageSrc} alt="Captured" />}
                      </div>
                    {!isWebcamOpen ? (
                      <button type="button" className="btn btn-primary mb-0" onClick={handleOpenWebcam}>Capture Image</button>
                    ) : (
                      <div>
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          width={320}
                          height={240}
                        />
                        <button onClick={capture}>Capture</button>
                        <button onClick={handleCloseWebcam}>
                          Close Webcam
                        </button>
                      </div>
                    )}
                </div>
                <div className="col-12 col-md-6">
                  <div className="input-container">
                    <label htmlFor="">Select Option</label>
                    <select name="" id="">
                      <option value="">Create Manually</option>
                      <option value="">RFID Machine</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="input-container">
                <label htmlFor="">Legal Name</label>
                <input type="text" placeholder="Add Department Name" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-container">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Add Last Name" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-container">
                <label htmlFor="">Phone Number</label>
                <div className="input-box d-flex align-items-center">
                  <input type="number" placeholder="Add Department Name" />
                  <button type="button" onClick={(e) => handleCheckPhoneNum(e)}>
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {checkPhoneNum && (
              <div className="col-12 col-md-4">
                <div className="input-container">
                  <label htmlFor="">OTP</label>
                  <div className="input-box d-flex align-items-center">
                    <input type="number" placeholder="Add OTP" />
                    <button type="button">Submit</button>
                  </div>
                </div>
              </div>
            )}

            <div className="col-12 col-md-4">
              <div className="input-container">
                <label htmlFor="">Country</label>
                <select name="" id="">
                  <option value="">Australia</option>
                  <option value="">Bharat</option>
                  <option value="">Japan</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="input-container">
                <label htmlFor="">City</label>
                <select name="" id="">
                  <option value="">Australia</option>
                  <option value="">Bharat</option>
                  <option value="">Japan</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="input-container">
                <label htmlFor="">State</label>
                <select name="" id="">
                  <option value="">Australia</option>
                  <option value="">Bharat</option>
                  <option value="">Japan</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-container">
                <label htmlFor="">Email</label>
                <div className="input-box d-flex align-items-center">
                  <input type="email" placeholder="Add Email" />
                  <button type="button" onClick={(e) => handleCheckEmail(e)}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
            {checkEmail && (
              <div className="col-12 col-md-4">
                <div className="input-container">
                  <label htmlFor="">OTP</label>
                  <div className="input-box d-flex align-items-center">
                    <input type="number" placeholder="Add Email OTP" />
                    <button type="button">Submit</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button type="button" className="btn btn-primary d-flex ml-auto mt-3">Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
