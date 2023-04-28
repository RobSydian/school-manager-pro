import DataActions from "../molecules/DataActions";
import StyledCustomTable from "../styles/organisms/StyledCustomTable";
import Student from "types/student";

type TableProps = {
  headers: string[];
  data: Student[];
  hasOptions: boolean;
  deleteFn: (id: string) => Promise<void>;
  getSelectedRowData: (data: Object) => {};
};

export default function CustomTable({
  headers,
  data,
  deleteFn,
  hasOptions,
  getSelectedRowData,
}: TableProps) {
  return (
    <StyledCustomTable>
      <table className="customTable" title="customTable">
        <thead title="theader">
          <tr>
            {headers.map((header) => {
              return (
                <th role="headerRow" key={header}>
                  {header}
                </th>
              );
            })}
            {hasOptions && <th></th>}
          </tr>
        </thead>
        <tbody>
          {data.map((tData) => {
            console.log({ tData });

            function displayData(): any {
              getSelectedRowData(tData);
            }
            return (
              <tr key={tData.id}>
                <td title={tData.name}>{tData.name}</td>
                <td title={tData.surname1}>{tData.surname1}</td>
                <td title={tData.surname2 || ""}>{tData.surname2}</td>
                <td title={tData.phoneNumber || ""}>{tData.phoneNumber}</td>
                <td title={tData.email}>{tData.email}</td>
                {hasOptions && (
                  <td className="actionsCol">
                    <DataActions
                      displayData={() => displayData()}
                      id={tData.id || ""}
                      deleteFn={() => deleteFn(tData.id || "")}
                      deletable
                      editable
                    />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledCustomTable>
  );
}
