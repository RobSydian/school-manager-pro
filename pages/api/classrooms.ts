import BASE_URL from "../../utils/baseUrl";

export async function getClassrooms() {
  try {
    const classrooms = await fetch(`${BASE_URL}/classrooms`);
    const data = await classrooms.json();
    console.log({ data });
    return data;
  } catch (error) {
    throw Error(error);
  }
}
// }
