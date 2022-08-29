import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { instance } from "../utils/apiService";
import Paginate from "../components/Paginate";
const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
  }, []);

 
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
        <Paginate datas={data} />
        <ToastContainer />
      </Container>
    </>
  );
};

export default Home;
