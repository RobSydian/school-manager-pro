import React, { useState } from "react";
import Classroom from "../../types/classroom";
import StyledCustomTable from "../styles/organisms/StyledCustomTable";

type TableProps = {
  headers: string[];
  data: Classroom[];
};

export default function CustomTable({ headers, data }: TableProps) {
  return (
    <StyledCustomTable>
      <tr>
        {headers.map((header) => {
          return <th key={header}>{header}</th>;
        })}
      </tr>
      {data.map((tData) => {
        return (
          <tr key={tData.id}>
            <td>{tData.name}</td>
            <td>{tData.description}</td>
          </tr>
        );
      })}
    </StyledCustomTable>
  );
}
