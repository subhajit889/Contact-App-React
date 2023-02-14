import React, { useEffect, useState } from "react";
import { getAllUsersAPI } from "./apiCallHelper";
import AddUserModal from "./components/AddUserModal";
import Contactcard from "./components/Contactcard";
import monogram from "./images/logo.png"


const App = () => {
  useEffect(() => {
    // getting all users
    getAllUsersAPI().then((res) => setUsers(res));
  }, []);
  const [users, setUsers] = useState([]);
  const [addUserModal, setAddUserModal] = useState(false);
  const deleteUser = (id) => {
    const filterUsers = users.filter((user) => user.id !== id);
    setUsers(filterUsers);
  };
  // updating user
  const updateUser = (data) => {
    const copy = [...users];
    copy[data.id - 1] = data;
    setUsers(copy);
  };
  // saving new user
  const saveUserHelper = (data) => {
    console.log(data);
    setUsers([...users, data]);
    setAddUserModal(false);
  };
  return (
    <div className="container">
      {/* Navbar Starts here */}
      <div className="total-navbar-container">
        <div className="logo-and-name">
          <div className="logo">
            <img src={monogram} alt="logo" />
          </div>
          <div className="app-name">
            <h2>Contact List</h2>
          </div>
        </div>
        <div className="btn">
          <a href=""><button className='home-btn'>Home</button></a>
        </div>
        {/* ADD BUTTON */}
        {!addUserModal && (<div className="btn">
          <button className="add-btn" onClick={() => setAddUserModal(true)}>Add Contact</button>
        </div>)}
      </div>
      <div className="contactsListContainer">
        {users.length > 0 &&
          users.map((user) => (
            <Contactcard
              key={user.id}
              user={user}
              deleteUser={(id) => deleteUser(id)}
              updateUser={(data) => updateUser(data)}
            />
          ))}
      </div>
      {addUserModal && (
        <AddUserModal
          close={() => setAddUserModal(false)}
          saveUser={(data) => saveUserHelper(data)}
        />
      )}
    </div>
  );
};

export default App;
