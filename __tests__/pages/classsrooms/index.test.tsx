import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
import ClassroomPage from "../../../pages/classrooms/index";
import * as classrooms from "../../../pages/api/classrooms";
import CustomTable from "../../../components/organisms/CustomTable";

jest.mock("../../../pages/api/classrooms");
const classroomsMock = jest.mocked(classrooms);

describe("Classrooms page", () => {
  it("Renders correctly", async () => {
    classroomsMock.getClassrooms.mockReturnValue(
      Promise.resolve([
        {
          _id: "63ce7e60328cc8c2d8020a3b",
          name: "class name-updated2",
          description: "description test8-updated",
          createdAt: "2023-01-23T12:32:32.141Z",
          updatedAt: "2023-01-26T10:04:54.173Z",
        },
      ])
    );
    render(<ClassroomPage />);
  });

  it("Renders page title", () => {
    const { getByText } = render(<ClassroomPage />);

    const title = getByText(/classrooms/);

    expect(title).toBeInTheDocument();
  });

  it("Renders classrooms not found if data is empty", () => {
    const { getByText } = render(<ClassroomPage />);

    const title = getByText(/no classrooms found/i);

    waitFor(() => {
      expect(title).toBeInTheDocument();
    });
  });

  it("Renders classrooms' table", async () => {
    classroomsMock.getClassrooms.mockReturnValue(
      Promise.resolve([
        {
          _id: "63ce7e60328cc8c2d8020a3b",
          name: "class name-updated2",
          description: "description test8-updated",
          createdAt: "2023-01-23T12:32:32.141Z",
          updatedAt: "2023-01-26T10:04:54.173Z",
        },
      ])
    );

    const container = render(<ClassroomPage />);
    const table = await container.findByTitle("customTable");

    await waitFor(() => {
      expect(table.hasChildNodes).toBeTruthy();
    });
  });
});
