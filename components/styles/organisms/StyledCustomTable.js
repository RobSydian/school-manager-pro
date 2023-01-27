import styled from "styled-components";

const StyledCustomTable = styled.div`
  min-width: 500px;
  /* overflow-y: scroll; */

  table {
    margin: 0;
    padding: 0;
    width: 100%;
    /* border: 1px solid black; */
  }

  td,
  th {
    padding: 0.7em;
    text-align: left;
    border-bottom: 1px solid #ddd;
    min-width: 140px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 200px;
  }

  th {
    font-weight: bold;
    text-transform: uppercase;
  }

  @media (min-width: 821px) {
    min-width: 20%;
  }
  .actionsCol {
    width: 15em;
  }
`;

export default StyledCustomTable;
