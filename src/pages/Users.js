import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const Users = () => {
  const [allUser, setAllUser] = useState([]);

  const loadUser =  () => {
     fetch(`http://localhost:5000/getusers`)
      .then((res) => res.json())
      .then((data) => {
        setAllUser(data);
      });
  };
  useEffect(() => loadUser(), []);

  return (
    <div style={{ margin: "50px" }}>
      <h2 className="products__title p-2">All user</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((user, index) => (
            <tr key={index} >
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {user.isAdmin ? <td>Admin</td> : <td>User</td>}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
