import React from 'react';
// import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';
export default function JobsPagination({ page, setPage }) {
  return (
    <Wrapper>
      {/* <Pagination>
        <Pagination.First />
        {page !== 1 && (
          <Pagination.Prev
            onClick={() => setPage((prevPage) => prevPage - 1)}
          />
        )}
        {page !== 1 && (
          <Pagination.Item onClick={() => setPage(1)}> 1</Pagination.Item>
        )}
        {page > 2 && <Pagination.Ellipsis />}
        {page > 2 && (
          <Pagination.Item onClick={() => setPage((prevPage) => prevPage - 1)}>
            {' '}
            {page - 1}
          </Pagination.Item>
        )}
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Item onClick={() => setPage((prevPage) => prevPage + 1)}>
          {page + 1}
        </Pagination.Item>
        <Pagination.Next onClick={() => setPage((prevPage) => prevPage + 1)} />

        <Pagination.Last />
      </Pagination> */}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
  margin: 2rem auto;
  border-radius: 12px;
`;
