import Classroom from "../../types/classroom";
import BASE_URL from "../../utils/baseUrl";

const headers = {
  "Content-Type": "application/json",
};

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

export async function createClassroom(classroom: Classroom) {
  try {
    const response = await fetch(`${BASE_URL}/classrooms`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(classroom),
    });
    console.log(response);
    return response;
  } catch (error) {
    throw Error(error.message);
  }
}
