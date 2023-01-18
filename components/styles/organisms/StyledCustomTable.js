import styled from "styled-components";

const StyledCustomTable = styled.table`
  margin: 0;
  padding: 0;
  min-width: 20%;

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
`;

export default StyledCustomTable;
