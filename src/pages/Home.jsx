import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { instance } from "../utils/apiService";
import Paginate from "../components/Paginate";
import AddNewProject from "../components/AddNewProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Home = () => {
  const [data, setData] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [dispatchClose, setDispatchClose] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleCloseCreate = () => {
    setShowCreate(false);
    setDispatchClose(dispatchClose + 1);
  };
  const handleShowCreate = () => setShowCreate(true);
  const dispatchUpdate = useSelector((state) => state.update);
  const handleLogout = () => {
    Swal.fire({
      title: "Confirm Quit",
      text: "Do you really want to quit ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Quit!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/Login");
        Swal.fire("Logged Out!", "Your account has been logged out.", "success");
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await instance.get("v1/projects/");
        setData(response.data.content);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      fetchData();
    };
  }, [dispatchUpdate, dispatchClose]);

  return (
    <>
      <Container className="mt-4" fluid>
        <Button className="float-end" onClick={handleLogout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> logout
        </Button>{" "}
        <br />
        <h2
          style={{ paddingLeft: "90px" }}
          className="d-flex justify-content-center"
        >
          {" "}
          My Projects{" "}
        </h2>
        <Button
          onClick={handleShowCreate}
          variant="success"
          style={{ position: "absolute" }}
          className="addNewProject"
        >
          <FontAwesomeIcon icon={faPlus} /> Add New Project
        </Button>
        <AddNewProject
          handleClose={handleCloseCreate}
          show={showCreate}
          data={data}
        />
        <Paginate loading={loading} datas={data} />
        <ToastContainer />
      </Container>
    </>
  );
};

export default Home;
