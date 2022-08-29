import React, { useEffect, useState } from "react";
/* import { Button, Card, Col } from "react-bootstrap"; */
import ReactPaginate from "react-paginate";

const Paginate = ({ datas }) => {
  const data = datas
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

   const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {/* <Col className="mb-4" md={4}>
        <Card style={{ minHeight: "211px" }}>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {project.owner}
            </Card.Subtitle>
            <Card.Text className="text-center">{project.description ? project.description : '(empty description)'}</Card.Text>
            
            <div className="d-grid gap-2">
              <Button variant="primary" size="md">
                EDIT
              </Button>
              <Button variant="danger" size="md">
                DELETE
              </Button>
            </div>
          
            
          </Card.Body>
        </Card>
      </Col> */}
      <ReactPaginate
          onPageChange={handlePageClick}
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={pageCount}
          breakLabel={"..."}
          pageRangeDisplayed={3}
          renderOnZeroPageCount={null}
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
        <div>
          {currentItems && currentItems.map((item) => {
            return (
              <h2 key={item.id}>{item.name}</h2>
            )
          })}
        </div>

    </>
  );
};

export default Paginate;
