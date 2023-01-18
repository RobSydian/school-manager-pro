const baseUrl = "http://localhost:5000";

// export function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
export async function getClassrooms() {
  try {
    const classrooms = await fetch(`${baseUrl}/classrooms`);
    // const data = await classrooms.json();
    const data = await classrooms.json();
    console.log({ data });
    // return data.status(200).json({ data });
    // return data.status(200).json(data);
    return data;
  } catch (error) {
    throw Error(error);
  }
}
// }
