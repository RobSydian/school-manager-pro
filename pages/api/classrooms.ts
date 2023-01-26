import Classroom from "../../types/classroom";
import BASE_URL from "../../utils/baseUrl";

const headers = {
  "Content-Type": "application/json",
};

export async function getClassrooms() {
  try {
    const classrooms = await fetch(`${BASE_URL}/classrooms`);
    const data = await classrooms.json();
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
    return response;
  } catch (error) {
    throw Error(error.message);
  }
}

export async function deleteClassroom(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/classrooms/${id}`, {
      method: "DELETE",
      headers: headers,
    });
    return response;
  } catch (error) {
    throw Error(error.message);
  }
}

export async function editClassroom(id: string, payLoad: any) {
  try {
    const { name, description } = payLoad;
    const resultBody: any = { name, description };
    console.log({ id }, { payLoad }, { resultBody });
    const response = await fetch(`${BASE_URL}/classrooms/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(resultBody),
    });
    console.log(response);
    return response;
  } catch (error) {
    throw Error(error.message);
  }
}
