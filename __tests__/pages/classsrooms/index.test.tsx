import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ClassroomPage from "../../../pages/classrooms/index";
import * as classrooms from "../../../pages/api/classrooms";

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
});
