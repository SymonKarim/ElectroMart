import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [adminEror, setAdminEror] = useState("");
  const [singleUser, setSingleUser] = useState({});
  const [boolUser, setBoolUser] = useState(false);

  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleUserSearch = (e) => {
    fetch(`https://obscure-harbor-46101.herokuapp.com/getuser/${email}`)
      .then((response) => response.json())
      .then((data) => {
        data ? setSingleUser(data) : setAdminEror("Email not found!");
        data ? setBoolUser(true) : setBoolUser(false);
        !data && setSingleUser({});
      });
  };
  const handleMakeAdmin = () => {
    axios
      .put(`https://obscure-harbor-46101.herokuapp.com/makeadmin/${email}`)
      .then(() => {
        window.alert("Admin added succesfully");
        setSingleUser({});
        setBoolUser(false);
      });
  };
  return (
    <div>
      <Container>
        <div className="makeOrderFoodFormMainDiv mt-5">
          <div className="makeOrderFoodFormInnerDiv">
            <h2 className="makeOrderItemTitle ">Make Admin</h2>
            <form
              className="makeOrderFoodForm  w-100 text-center"
              onSubmit={handleSubmit}
            >
              <Input
                isFloatingLabelInput={true}
                label="User Email"
                name="email"
                value={email}
                type="text"
                placeholder="Phone number"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="d-flex text-danger">
                {!adminEror ? <p>Search via email</p> : <p>{adminEror}</p>}
              </div>

              <Button
                onClick={handleUserSearch}
                btnClass="btn-warning makeOrderBtn"
                name="Search"
                type="submit"
              />
            </form>
          </div>
          {boolUser && (
            <div className="mt-5 text-center">
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
                  <tr>
                    <td>1</td>
                    <td>{singleUser.name}</td>
                    <td>{singleUser.email}</td>
                    {singleUser.isAdmin ? <td>Admin</td> : <td>User</td>}
                  </tr>
                </tbody>
              </Table>

              {singleUser.isAdmin ? (
                <h1>
                  <span className="text-danger">{singleUser.name}</span> is
                  already admin!
                </h1>
              ) : (
                <div>
                  <h3 className="mb-3">
                    Hello, 
                    <span className="text-danger">{user.displayName}!</span> Do
                    you really want to make  
                    <span className="text-danger"> {singleUser.name} </span>
                     Admin?
                  </h3>
                  <Button
                    onClick={handleMakeAdmin}
                    btnClass="btn-danger makeOrderBtn"
                    name="Make Admin"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MakeAdmin;
