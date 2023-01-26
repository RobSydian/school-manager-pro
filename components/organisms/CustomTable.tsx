import React, { useEffect, useState } from "react";
import Classroom from "../../types/classroom";
import DataActions from "../molecules/DataActions";
import StyledCustomTable from "../styles/organisms/StyledCustomTable";

type TableProps = {
  headers: string[];
  data: Classroom[];
  deleteFn: (id: string) => Promise<void>;
  getSelectedRowData: (data: Object) => {};
};

export default function CustomTable({
  headers,
  data,
  deleteFn,
  getSelectedRowData,
}: TableProps) {
  return (
    <StyledCustomTable>
      <table>
        <tr>
          {headers.map((header) => {
            return <th key={header}>{header}</th>;
          })}
        </tr>
        {data.map((tData) => {
          function displayData(): any {
            getSelectedRowData(tData);
          }
          return (
            <tr key={tData._id}>
              <td title={tData.name}>{tData.name}</td>
              <td title={tData.description}>{tData.description}</td>
              <td className="actionsCol">
                <DataActions
                  displayData={() => displayData()}
                  id={tData._id}
                  deleteFn={() => deleteFn(tData._id)}
                  deletable
                  editable
                />
              </td>
            </tr>
          );
        })}
      </table>
    </StyledCustomTable>
  );
}
