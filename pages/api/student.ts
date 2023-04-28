import Student from "types/student";
import { BASE_URL_API } from "utils/baseUrl";
import axios from "axios";
const headers = {
  "Content-Type": "application/json",
};

export async function getStudents(): Promise<Student[]> {
  try {
    const { data } = await axios.get(`${BASE_URL_API}/students`);
    console.log(data);
    return data;
  } catch (error) {
    throw Error(error);
  }
}

export async function deleteStudent(id: string) {
  try {
    const response = await axios.delete(`${BASE_URL_API}/student/${id}`, {
      method: "DELETE",
      headers,
    });
    return response;
  } catch (error) {
    throw Error(error.message);
  }
}
