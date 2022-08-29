import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import Project from "./Project";

const Paginate = ({ datas }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
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
      <Row>
        {currentItems &&
          currentItems.map((item) => <Project key={item.id} item={item} />)}
      </Row>
    </>
  );
};

export default Paginate;
