import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { instance } from "../utils/apiService";
import ReactPaginate from "react-paginate";
import Project from "../components/Project";
const Home = () => {
  const [projects, setProjects] = useState(null);
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
        setProjects(response.data.content);
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
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={10}
          breakLabel={"..."}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
        <Row className="pe-5 ps-5">
          {projects &&
            projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Home;
