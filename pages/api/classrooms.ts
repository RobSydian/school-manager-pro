const baseUrl = "http://localhost:5000/api";

// export function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
export async function getClassrooms() {
  const classrooms = await fetch(`${baseUrl}/classrooms`);
  const data = await classrooms.json();

  console.log({ data });
  // return data.status(200).json({ data });
  return data;
}
// }
