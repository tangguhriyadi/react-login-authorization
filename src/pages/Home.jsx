import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { instance } from "../utils/apiService";
import Paginate from "../components/Paginate";
import AddNewProject from "../components/AddNewProject";
const Home = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  }, [show]);

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
          onClick={handleShow}
          variant="success"
          style={{ position: "absolute" }}
        >
          + Add New Project
        </Button>
        <AddNewProject handleClose={handleClose} show={show} data={data} />
        <Paginate datas={data} />
        <ToastContainer />
      </Container>
    </>
  );
};

export default Home;
