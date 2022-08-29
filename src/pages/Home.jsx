import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { instance } from "../utils/apiService";
import Paginate from "../components/Paginate";
import AddNewProject from "../components/AddNewProject";
/* import EditProject from "../components/EditProject"; */
import { useSelector } from "react-redux";
const Home = () => {
  const [data, setData] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  /* const [showEdit, setShowEdit] = useState(false); */
  const navigate = useNavigate();
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);
/*   const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true); */
  /* const [dispatchDelete, setDispatchDelete] = useState(0); */
  const dispatchDelete = useSelector(state => state.delete)

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("v1/projects/");
        console.log(response.data.content);
        setData(response.data.content); 
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return () => {
      fetchData();
    };
  }, [showCreate, dispatchDelete ]);

  
    return (
      <>
        <Container className="mt-4" fluid>
          <Button className="float-end" onClick={handleLogout}>
            logout
          </Button>{" "}
          <br />
          <h2
            style={{ paddingLeft: "75px" }}
            className="d-flex justify-content-center"
          >
            {" "}
            My Projects{" "}
          </h2>
          <Button
            onClick={handleShowCreate}
            variant="success"
            style={{ position: "absolute" }}
          >
            + Add New Project
          </Button>
          <AddNewProject handleClose={handleCloseCreate} show={showCreate} data={data} />
          {/* <EditProject handleClose={handleCloseEdit} handleShow={handleShowEdit} show={showEdit} data={data} /> */}
          <Paginate datas={data}  />
          <ToastContainer />
        </Container>
      </>
    );
};

export default Home;
