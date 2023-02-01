import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/index";

describe("ClassroomsPage", () => {
  //   const classrooms = [];
  //   window.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () =>
  //         Promise.resolve({
  //           props: classrooms,
  //         }),
  //     })
  //   );
  //   it("gets the serverside props on first render", async () => {
  //     render(<ClassroomPage />);
  //     const response = await getServerSideProps();
  //     expect(response).toEqual(
  //       expect.objectContaining({
  //         props: {
  //           props: {
  //             props: classrooms,
  //           },
  //         },
  //       })
  //     );
  //   });
});

describe("Home", () => {
  it("gets the serverside props on first render", async () => {
    const { getByText } = render(<Home />);

    const title = getByText(/initial page/i);
    const description = getByText(/let's begin/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
