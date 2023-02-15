import React, { useState } from "react";
import { updateUserAPI } from "../apiCallHelper";
import "../index.css";

const EditContact = ({ user, close, updateUser }) => {
  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });
  const { name, email, phone } = values;

  const onChangeHandler = (name) => (e) => {
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  // updating user
  const updateUserHeper = () => {
    updateUserAPI(values, user.id)
      .then((res) => {
        updateUser(res);
        close();
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
            <h3>Cancel</h3>
          </div>
          <div className="button save" onClick={updateUserHeper}>
            <h3>Save</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;