import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import EditProject from "./EditProject";
import Project from "./Project";
import { MoonLoader } from "react-spinners";

const Paginate = ({ datas, loading }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [selected, setSelected] = useState({});
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(datas.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(datas.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, datas]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % datas.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <ReactPaginate
        onPageChange={handlePageClick}
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={pageCount}
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
      {loading ? (
        <div
          style={{ height: "80vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <MoonLoader color="#2c65e3" size={100} />
        </div>
      ) : (
        <Row>
          {currentItems &&
            currentItems.map((item) => (
              <Project key={item.id} item={item} setSelected={setSelected} />
            ))}
        </Row>
      )}

      <EditProject selected={selected} />
    </>
  );
};

export default Paginate;
