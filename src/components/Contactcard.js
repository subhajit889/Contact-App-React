import React, { useState } from "react";
import { deleteUserAPI } from "../apiCallHelper";
import EditContact from "./EditContact";
import "../index.css"

const Contactcard = ({ user, deleteUser, updateUser }) => {
  const colors = [
    "#E2171797",
    "#3944F797",
    "#4DD63797",
    "#F7CD2E97",
    "#8D3DAF97",
    "#E07C2497",
    "#35BDD097",
    "#0D0D0D97",
  ];
  const color = Math.floor(Math.random() * colors.length);
  const [openmodal, setOpenmodal] = useState(false);

  // setting initials to avatar
  const userName = () => {
    const name = user.name.split(" ");
    if (name.length === 2) {
      return name[0][0] + name[1][0];
    }
    return name[0][0] + name[0][1];
  };

  // deletehandler
  const handleDelete = () => {
    deleteUserAPI();
    return deleteUser(user.id);
  };

  // Updating the user
  const handleUpdateUser = (data) => {
    return updateUser(data);
  };
  return (
    <div className="contactContainer">
      <div className="contactAvatar" style={{ backgroundColor: colors[color] }}>
        <span>{userName()}</span>
      </div>
      <div className="userInfoContainer">
        <span className="userFullname" style={{ color: colors[color] }}>
          {user.name}
        </span>
        <div className="infoHolder">
          <span className="infoText">Contact: {user.phone}</span>
        </div>
        <div className="infoHolder">
          <span className="infoText">mail: {user.email}</span>
        </div>
      </div>
      <div className="buttons">
        <button className = "dlt-btn" onClick={() => handleDelete()}>Delete</button>
        <button className = "edit-btn" onClick={() => setOpenmodal(true)}>Edit</button>
      </div>
      {openmodal && (
        <EditContact
          close={() => setOpenmodal(false)}
          user={user}
          updateUser={(data) => handleUpdateUser(data)}
        />
      )}
    </div>
  );
};

export default Contactcard;