import React, { useState } from "react";
import Classroom from "../../types/classroom";
import DataActions from "../molecules/DataActions";
import StyledCustomTable from "../styles/organisms/StyledCustomTable";

type TableProps = {
  headers: string[];
  data: Classroom[];
  // editFn: () => {};
  deleteFn: () => {};
};

export default function CustomTable({ headers, data, deleteFn }: TableProps) {
  console.log(data);
  return (
    <StyledCustomTable>
      <tr>
        {headers.map((header) => {
          return <th key={header}>{header}</th>;
        })}
      </tr>
      {data.map((tData) => {
        return (
          <tr key={tData._id}>
            <td>{tData.name}</td>
            <td>{tData.description}</td>
            <td>
              <DataActions
                id={tData._id}
                deleteFn={() => deleteFn(tData._id)}
                editable
                deletable
              />
            </td>
            {/* <td>{tData._id}</td> */}
          </tr>
        );
      })}
    </StyledCustomTable>
  );
}
