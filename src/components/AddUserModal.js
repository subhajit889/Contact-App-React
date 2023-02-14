import React, { useState } from "react";
import { createUserAPI } from "../apiCallHelper";
import "../index.css";

const AddUserModal = ({ close, saveUser }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { name, email, phone} = values;

  const onChangeHandler = (name) => (e) => {
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };


  //   creating new user
  const createUserHelper = () => {
    createUserAPI(values)
      .then((res) => {
        saveUser(res);
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <div className="userModal">
      <div className="inofContainer">
        <div className="inputHolder">
          <span>Name</span>
          <input
            type="text"
            className="input"
            value={name}
            onChange={onChangeHandler("name")}
          />
        </div>
        <div className="inputHolder">
          <span>Email</span>
          <input
            type="text"
            className="input"
            value={email}
            onChange={onChangeHandler("email")}
          />
        </div>
        <div className="inputHolder">
          <span>Phone</span>
          <input
            type="text"
            className="input"
            value={phone}
            onChange={onChangeHandler("phone")}
          />
        </div>
        <div className="editButtons">
          <div className="button cancel" onClick={close}>
            CANCEL
          </div>
          <div className="button save" onClick={createUserHelper}>
            SAVE
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;