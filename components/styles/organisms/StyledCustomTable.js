import styled from "styled-components";

const StyledCustomTable = styled.table`
  margin: 0;
  padding: 0;
  min-width: 100%;
  border: 1px solid black;
  overflow: scroll;

  td,
  th {
    padding: 0.7em;
    text-align: left;
    border-bottom: 1px solid #ddd;
    min-width: 150px;
  }

  th {
    font-weight: bold;
    text-transform: uppercase;
  }

  /* @media (min-width: 821px) {
    min-width: 20%;
  } */
`;

export default StyledCustomTable;
